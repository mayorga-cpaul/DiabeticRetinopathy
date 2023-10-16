namespace Retinopathy.Api.ViewModels.Auth.Users;

using Retinopathy.Api.Attributes;
using Retinopathy.Api.Contracts.Requests;
using Retinopathy.Api.Validations.Auth;

[Validator<TokenRequestValidator>]
public class TokenRequest : IViewModel, IRequestValidator
{
    public string Email { get; set; } = string.Empty;

    public string Password { get; set; } = string.Empty;
}
