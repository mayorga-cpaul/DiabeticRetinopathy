namespace Retinopathy.Api.ViewModels.Auth.Roles;

using Retinopathy.Api.Attributes;
using Retinopathy.Api.Contracts.Requests;
using Retinopathy.Api.Validations.Auth.Roles;

[Validator<CreateRoleValidator>]
public class CreateRoleRequest : IViewModel, IRequestValidator
{
    public string Name { get; set; } = string.Empty;

    public CreateClaimRequest[] RoleClaims { get; set; } = Array.Empty<CreateClaimRequest>();
}
