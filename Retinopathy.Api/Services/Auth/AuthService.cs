﻿namespace Retinopathy.Api.Services.Auth;

using Retinopathy.Api.Extensions.RequestExtension;
using Retinopathy.Api.Helpers;
using Retinopathy.Api.Interfaces;
using Retinopathy.Api.Stores;
using Retinopathy.Api.Stores.Auth;
using static Retinopathy.Api.Helpers.ContextData;
using Retinopathy.Api.ViewModels.Auth.Roles;
using Retinopathy.Api.ViewModels.Auth.Users;
using Retinopathy.Model.Auth.Roles;
using Retinopathy.Model.Auth.Users;
using Retinopathy.DataTransferObject.Commons;

public class AuthService(IStore Store, ITokenService TokenService) : IAuthService
{
    private readonly IStore<User> UserStore = Store.GetStore<User>();
    private readonly IStore<Role> RoleStore = Store.GetStore<Role>();

    public async ValueTask<EntityId?> CreateRoleAsync(CreateRoleRequest Request)
    {
        await Request.ValidateRequestAsync
        (
            "A934B22B-7771-4ADA-839F-AA6C436447A6",
            "Error al crear el rol",
            "0001",
            "SERVAUTH001",
            Key(nameof(RoleStore)).Value(RoleStore)
        );

        return await RoleStore.CreateRoleAsync(Request);
    }

    public async ValueTask<UserInfo?> CreateUserAsync(CreateUserRequest Request)
    {
        await Request.ValidateRequestAsync
        (
            "6BB44CDB-219C-48A0-9B4A-B26C2F2FADF3",
            "Error al crear el usuario",
            "0002",
            "SERVAUTH001",
            Key(nameof(RoleStore)).Value(RoleStore).
            Key(nameof(UserStore)).Value(UserStore)
        );

        return await UserStore.CreateUserAsync(Request);
    }

    public async ValueTask<UserInfo?> FetchUserByEmailAsync(string? Email)
    {
        return await UserStore.FetchUserByEmailAsync(Email);
    }

    public async ValueTask<UserInfo?> FetchUserByIdAsync(long? UserId)
    {
        return await UserStore.FetchUserByIdAsync(UserId);
    }

    public async ValueTask<AuthInfo?> TokenRequestAsync(TokenRequest Request)
    {
        await Request.ValidateRequestAsync
        (
            "FE3C6486-AC93-4C22-8C59-C0B906146925",
            "Error al crear generar el token",
            "0003",
            "SERVAUTH001",
            Key(nameof(Request)).Value(Request).
            Key(nameof(UserStore)).Value(UserStore)
        );


        UserInfo? User = await UserStore.FetchUserByEmailAsync(Request.Email);

        var UserClaims = await UserStore.FetchClaimsByUserId(User?.UserId).ToListAsync();

        var RoleClaims = await RoleStore.FetchRoleClaimsByUserId(User?.UserId).ToListAsync();

        UserClaims.AddRange(RoleClaims);

        var Token = TokenService.GenerateToken(User, UserClaims);

        return new AuthInfo()
        {
            UserId = User!.UserId,
            UserName = User.UserName,
            Email = User.Email,
            Phone = User.Phone,
            Token = Token,
        };
    }
}
