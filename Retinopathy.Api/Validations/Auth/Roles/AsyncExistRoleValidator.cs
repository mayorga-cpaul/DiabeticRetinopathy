namespace Retinopathy.Api.Validations.Auth.Roles;

using FluentValidation;
using FluentValidation.Validators;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.Stores.Auth;
using Retinopathy.Api.ViewModels.Auth;
using Retinopathy.Model.Auth.Roles;

public class AsyncExistRoleValidator<T> : AsyncPropertyValidator<T, IEnumerable<AssignRequestType>>
{
    public override string Name => "AsyncExistRoleValidator";

    public override async Task<bool> IsValidAsync(ValidationContext<T> Context, IEnumerable<AssignRequestType> Value, CancellationToken Cancellation)
    {
        return  await Context.RootContextData[nameof(RoleStore)].AsStore<Role>().ExistAndDuplicatedRolesAsync(Value);
    }

    protected override string GetDefaultMessageTemplate(string ErrorCode)
    {
        return "'{PropertyName}' Solicitud con registros inexistentes o duplicados: 'RoleId' debe existir. y debe ser único";
    }
}
