namespace Retinopathy.Api.Validations.Auth.Users;

using FluentValidation;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.ViewModels.Auth.Users;

public class CreateUserValidator : AbstractValidator<CreateUserRequest>
{
    public CreateUserValidator()
    {
        RuleFor(U => U.UserName)
            .NotEmpty()
            .NotNull()
            .UserUniqueUserNameInRequest()
            .WithName("Nombre de usuario");

        RuleFor(U => U.Email)
            .NotEmpty()
            .NotNull()
            .UserUniqueEmailInRequest()
            .WithName("Email");

        RuleFor(U => U.Password)
            .NotEmpty()
            .NotNull()
            .MinimumLength(8)
            .WithName("Contraseña");

        RuleFor(U => U.Phone)
            .NotEmpty()
            .NotNull()
            .UserUniquePhoneInRequest()
            .WithName("Número de celular");

        RuleFor(U => U.Roles)
            .NotEmpty()
            .NotNull()
            .WithName("Roles de usuario");

        RuleFor(U => U.UserClaims)
            .NotEmpty()
            .NotNull()
            .UniqueClaimTypes()
            .WithName("Reclamos de usuario");
    }
}
