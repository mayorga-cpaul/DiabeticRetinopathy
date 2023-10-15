using Retinopathy.Api.Helpers;
using Retinopathy.Api.ViewModels.Auth.Roles;
using Retinopathy.Api.ViewModels.Auth.Users;
using Retinopathy.DataTransferObject.Commons;

namespace Retinopathy.Api.Interfaces;

public interface IAuthService
{
    ValueTask<EntityId?> CreateRoleAsync(CreateRoleRequest CreateRoleRequest);

    ValueTask<UserInfo?> CreateUserAsync(CreateUserRequest Request);

    ValueTask<UserInfo?> FetchUserByEmailAsync(string? Email);

    ValueTask<UserInfo?> FetchUserByIdAsync(long? UserId);

    ValueTask<AuthInfo?> TokenRequestAsync(TokenRequest ViewModel);
}
