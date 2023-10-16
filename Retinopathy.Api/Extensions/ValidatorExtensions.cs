namespace Retinopathy.Api.Extensions;

using FluentValidation;
using Retinopathy.Api.Validations.Auth.Roles;
using Retinopathy.Api.Validations.Auth.Users;
using Retinopathy.Api.ViewModels.Auth;

public static class ValidatorExtensions
{
    public static IRuleBuilderOptions<T, IEnumerable<AssignRequestType>> ExistRoleInRequest<T>(this IRuleBuilder<T, IEnumerable<AssignRequestType>> RuleBuilder)
        => RuleBuilder.SetAsyncValidator(new AsyncExistRoleValidator<T>());

    public static IRuleBuilderOptions<T, string?> UniqueRoleNameAsync<T>(this IRuleBuilder<T, string?> RuleBuilder)
        => RuleBuilder.SetAsyncValidator(new AsyncExistRoleNameValidator<T>());

    public static IRuleBuilderOptions<T, string?> UserUniqueEmailInRequest<T>(this IRuleBuilder<T, string?> RuleBuilder)
        => RuleBuilder.SetAsyncValidator(new AsyncUserUniqueEmailValidator<T>());

    public static IRuleBuilderOptions<T, string?> UserUniquePhoneInRequest<T>(this IRuleBuilder<T, string?> RuleBuilder)
        => RuleBuilder.SetAsyncValidator(new AsyncUserUniquePhoneValidator<T>());

    public static IRuleBuilderOptions<T, string?> UserUniqueUserNameInRequest<T>(this IRuleBuilder<T, string?> RuleBuilder)
        => RuleBuilder.SetAsyncValidator(new AsyncUserUniqueUserNameValidator<T>());

    public static IRuleBuilderOptions<T, IEnumerable<CreateClaimRequest>> UniqueClaimTypes<T>(this IRuleBuilder<T, IEnumerable<CreateClaimRequest>> RuleBuilder)
        => RuleBuilder.SetValidator(new UserClaimUniqueRequestValidator<T>());

    public static IRuleBuilderOptions<T, string?> LoginValidation<T>(this IRuleBuilder<T, string> RuleBuilder)
        => RuleBuilder.SetAsyncValidator(new AsyncLoginValidator<T>());

}