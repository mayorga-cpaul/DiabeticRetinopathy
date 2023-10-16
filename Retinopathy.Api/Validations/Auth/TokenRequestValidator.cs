namespace Retinopathy.Api.Validations.Auth; 

using FluentValidation;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.ViewModels.Auth.Users;

public class TokenRequestValidator : AbstractValidator<TokenRequest>
{
    public TokenRequestValidator()
    {
        RuleFor(U => U.Password)
            .MaximumLength(20)
            .MinimumLength(5)
            .LoginValidation()
            .WithName("Contraseña");

        RuleFor(U => U.Email)
           .NotEmpty()
           .NotNull();
    }
}
