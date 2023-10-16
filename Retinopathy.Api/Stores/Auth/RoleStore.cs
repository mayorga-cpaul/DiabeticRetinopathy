namespace Retinopathy.Api.Stores.Auth;

using Dapper;
using Retinopathy.Api.Exceptions;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.Helpers;
using Retinopathy.Api.ViewModels.Auth;
using Retinopathy.Api.ViewModels.Auth.Roles;
using Retinopathy.DataTransferObject.Commons;
using Retinopathy.Model.Auth.Roles;
using System.Data;
using System.Security.Claims;

public static class RoleStore
{
    public static async ValueTask<EntityId> CreateRoleAsync(this IStore<Role> Store, CreateRoleRequest Request)
    {
        DynamicParameters Parameters = Request.ToDynamicParameters();
        Parameters.Add(nameof(Role.RoleId), default, DbType.Int64, ParameterDirection.Output);

        using var SqlTransaction = await Store.BeginTransactionAsync();

        try
        {
            await Store.ExecuteStoredProcedureAsync("[dbo].[InsertRole]", Parameters, SqlTransaction);

            SqlTransaction.Commit();

            return Parameters.Get<long>(nameof(Role.RoleId));
        }
        catch (Exception Ex)
        {
            EyesCareException EyesCareExceptionEx = Ex.ToEyesCareException("EA027E84-C336-4A23-B13C-35D8FCCFCB27", "0001", "Error al insertar el rol", "RS0001");

            try
            {
                SqlTransaction.Rollback();
            }
            catch (Exception ExRollback)
            {
                throw ExRollback.ToEyesCareException("693BE04F-75AC-4B8B-9750-2A4807A7FC5E", "0002", "Error al insertar el rol", "RS0001");
            }

            throw EyesCareExceptionEx;
        }
    }

    public static async ValueTask<bool> ExistAndDuplicatedRolesAsync(this IStore<Role> Store, IEnumerable<AssignRequestType> Request)
    {
        var Parameters = new DynamicParameters();
        Parameters.Add("RoleNames", Request.ToDataTable(), DbType.Object, ParameterDirection.Input);
        return await Store.ExecuteStoredProcedureAsync("[dbo].[CheckAndExistDuplicatedRoles]", Parameters) > 0;
    }

    public static async ValueTask<RoleInfo?> FetchRoleByUserId(this IStore<Role> Store, long UserId)
    {
        return await Store.ExecuteStoredProcedureQueryAsync<RoleInfo>("[dbo].[FetchRoleByUserId]", new { UserId }).SingleOrDefaultAsync();
    }

    public static IAsyncEnumerable<Claim> FetchRoleClaimsByUserId(this IStore<Role> Store, long? UserId)
    {
        return Store.ExecuteStoredProcedureQueryAsync<RoleClaim>("[dbo].[FetchRoleClaimByUserId]", new { UserId }).Select(C => new Claim(C.ClaimType, C.ClaimValue));
    }

    public static async ValueTask<RoleInfo?> FetchRoleByName(this IStore<Role> Store, string? RoleName)
    {
        return await Store.ExecuteStoredProcedureQueryAsync<RoleInfo>("[dbo].[FetchRoleByName]", new { RoleName }).SingleOrDefaultAsync();
    }
}