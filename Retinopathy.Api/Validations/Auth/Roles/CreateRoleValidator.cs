namespace Retinopathy.Api.Validations.Auth.Roles;

using FluentValidation;
using Retinopathy.Api.Extensions;
using Retinopathy.Api.ViewModels.Auth.Roles;

public class CreateRoleValidator : AbstractValidator<CreateRoleRequest>
{
    public CreateRoleValidator()
    {
        RuleFor(R => R.Name)
            .NotEmpty()
            .NotNull()
            .UniqueRoleNameAsync()
            .WithName("Nombre de rol");
    }
}
