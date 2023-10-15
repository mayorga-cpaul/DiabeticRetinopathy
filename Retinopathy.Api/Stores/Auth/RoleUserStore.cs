namespace Retinopathy.Api.Stores.Auth;

using Retinopathy.Api.Helpers;
using Retinopathy.Api.ViewModels.Auth.Roles;
using Retinopathy.Model.Auth.Roles;

public static class RoleUserStore
{
    public static ValueTask<EntityId> UpdateRoleUserAsync(this IStore<Role> Store, UpdateRoleUserRequest Request)
    {
        throw new NotImplementedException();
    }
}
