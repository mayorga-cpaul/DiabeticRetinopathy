namespace Retinopathy.Api.Validations.Auth.Users;

using FluentValidation.Validators;
using FluentValidation;
using Retinopathy.Api.Stores.Auth;
using Retinopathy.Model.Auth.Users;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.ViewModels.Auth.Users;

public class AsyncLoginValidator<T> : AsyncPropertyValidator<T, string?>
{
    public override async Task<bool> IsValidAsync(ValidationContext<T> Context, string? Value, CancellationToken cancellation)
    {
        var Store = Context.RootContextData[nameof(UserStore)].AsStore<User>();
        var TokenRequest = Context.RootContextData[nameof(Retinopathy.Api.ViewModels.Auth.Users.TokenRequest)].As<TokenRequest>();
        return await Store.LoginAsync(TokenRequest);
    }

    public override string Name => "AsyncLoginValidator";

    protected override string GetDefaultMessageTemplate(string ErrorCode)
    {
        return "Error al iniciar sesión";
    }
}
