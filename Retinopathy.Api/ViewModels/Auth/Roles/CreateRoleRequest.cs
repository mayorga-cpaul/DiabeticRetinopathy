namespace Retinopathy.Api.ViewModels.Auth.Roles;

using Retinopathy.Api.Contracts.Requests;

public class CreateRoleRequest : IViewModel, IRequestValidator
{
    public string Name { get; set; } = string.Empty;

    public CreateClaimRequest[] RoleClaims { get; set; } = Array.Empty<CreateClaimRequest>();
}
