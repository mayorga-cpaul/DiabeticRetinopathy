namespace Retinopathy.Api.Validations.Auth.Users;

using FluentValidation;
using FluentValidation.Validators;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.Stores.Auth;
using Retinopathy.Model.Auth.Users;

public class AsyncUserUniquePhoneValidator<T> : AsyncPropertyValidator<T, string?>
{
    public override async Task<bool> IsValidAsync(ValidationContext<T> Context, string? Value, CancellationToken cancellation)
    {
        var User = await Context.RootContextData[nameof(UserStore)].AsStore<User>().FetchUserByPhoneAsync(Value);
        return User is null;
    }
    public override string Name => "AsyncUserUniquePhoneValidator";

    protected override string GetDefaultMessageTemplate(string ErrorCode)
    {
        return "'{PropertyName}' Ya existe un registro con este valor.";
    }
}
