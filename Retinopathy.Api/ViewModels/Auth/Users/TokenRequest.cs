namespace Retinopathy.Api.ViewModels.Auth.Users;

using Retinopathy.Api.Contracts.Requests;

public class TokenRequest : IViewModel, IRequestValidator
{
    public string Email { get; set; } = string.Empty;

    public string Password { get; set; } = string.Empty;
}
