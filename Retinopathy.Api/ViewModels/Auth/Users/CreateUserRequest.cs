namespace Retinopathy.Api.ViewModels.Auth.Users;

using Retinopathy.Api.Attributes;
using Retinopathy.Api.Contracts.Requests;
using Retinopathy.Api.Validations.Auth.Users;

[Validator<CreateUserValidator>]
public class CreateUserRequest : IViewModel, IRequestValidator
{
    public string UserName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;   
    
    public string Password { get; set; } = string.Empty;
    
    public string Phone { get; set; } = string.Empty;
    
    public AssignRequestType[] Roles { get; set; } = Array.Empty<AssignRequestType>();
    
    public CreateClaimRequest[] UserClaims { get; set; } = Array.Empty<CreateClaimRequest>();
}