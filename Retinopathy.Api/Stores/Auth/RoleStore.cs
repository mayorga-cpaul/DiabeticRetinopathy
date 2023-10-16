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
            EyesCareException EyesCareExceptionEx = Ex.ToEyesCareException();

            try
            {
                SqlTransaction.Rollback();
            }
            catch (Exception ExRollback)
            {
                throw ExRollback.ToEyesCareException();
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