namespace Retinopathy.Api.Validations.Auth.Roles;

using FluentValidation;
using FluentValidation.Validators;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.Stores.Auth;
using Retinopathy.Model.Auth.Roles;

public class AsyncExistRoleNameValidator<T> : AsyncPropertyValidator<T, string?>
{
    public override string Name => "AsyncExistRoleNameValidator";

    public override async Task<bool> IsValidAsync(ValidationContext<T> Context, string? Value, CancellationToken Cancellation)
    {
        var Result = await Context.RootContextData[nameof(RoleStore)].AsStore<Role>().FetchRoleByName(Value);
        return Result is null;
    }

    protected override string GetDefaultMessageTemplate(string ErrorCode)
    {
        return "El rol '{PropertyName}' no debe existir. y debe ser único";
    }
}
