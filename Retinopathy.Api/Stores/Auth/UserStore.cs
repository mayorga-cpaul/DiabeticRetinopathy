namespace Retinopathy.Api.Stores.Auth;

using Dapper;
using Retinopathy.Api.Exceptions;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.Helpers;
using Retinopathy.Api.ViewModels.Auth.Users;
using Retinopathy.DataTransferObject.Commons;
using Retinopathy.Model.Auth.Users;
using System.Data;
using System.Security.Claims;

public static class UserStore
{
    public static async ValueTask<UserInfo> CreateUserAsync(this IStore<User> Store, CreateUserRequest Request)
    {
        Request.Password = Convert.ToBase64String(Request.Password.ComputeHashSha512());

        DynamicParameters Parameters = Request.ToDynamicParameters();
        Parameters.Add(nameof(User.UserId), default, DbType.Int64, ParameterDirection.Output);

        var Transaction = await Store.BeginTransactionAsync();

        try
        {
            await Store.ExecuteStoredProcedureAsync("[dbo].[InsertUser]", Parameters, Transaction);
            Transaction.Commit();

            return new UserInfo() { UserId = Parameters.Get<long>(nameof(User.UserId)), UserName = Request.UserName };
        }
        catch (Exception Ex)
        {
            EyesCareException EyesCareExceptionEx = Ex.ToEyesCareException();

            try
            {
                Transaction.Rollback();
            }
            catch (Exception ExRollback)
            {
                throw ExRollback.ToEyesCareException();
            }

            throw EyesCareExceptionEx;
        }
    }

    public static async ValueTask<UserInfo?> FetchUserByEmailAsync(this IStore<User> Store, string? Email)
    {
        return await Store.ExecuteStoredProcedureQueryAsync<UserInfo>("[dbo].[FetchUserByEmail]", new { Email }).SingleOrDefaultAsync();
    }

    public static async ValueTask<UserInfo?> FetchUserByIdAsync(this IStore<User> Store, long? UserId)
    {
        return await Store.ExecuteStoredProcedureQueryAsync<UserInfo>("[dbo].[FetchUserById]", new { UserId }).SingleOrDefaultAsync();
    }

    public static async ValueTask<UserInfo?> FetchUserByUserNameAsync(this IStore<User> Store, string? Name)
    {
        return await Store.ExecuteStoredProcedureQueryAsync<UserInfo>("[dbo].[FetchUserByName]", new { Name }).SingleOrDefaultAsync();
    }

    public static async ValueTask<UserInfo?> FetchUserByPhoneAsync(this IStore<User> Store, string? Phone)
    {
        return await Store.ExecuteStoredProcedureQueryAsync<UserInfo>("[dbo].[FetchUserByPhone]", new { Phone }).SingleOrDefaultAsync();
    }

    public static ValueTask<string> ForgotPasswordAsync(this IStore<User> Store, string Email)
    {
        throw new NotImplementedException();
    }

    public static async ValueTask<bool> LoginAsync(this IStore<User> Store, TokenRequest Login)
    {
        Login.Password = Convert.ToBase64String(Login.Password.ComputeHashSha512());
        return (await Store.ExecuteStoredProcedureQueryAsync<UserInfo>("[dbo].[FetchLogin]", Login).SingleOrDefaultAsync()) is not null;
    }

    public static IAsyncEnumerable<Claim> FetchClaimsByUserId(this IStore<User> Store, long? UserId)
    {
        return Store.ExecuteStoredProcedureQueryAsync<UserClaim>("[dbo].[FetchClaimByUserId]", new { UserId }).Select(C => new Claim(C.ClaimType, C.ClaimValue));
    }
}