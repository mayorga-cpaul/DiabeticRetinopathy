namespace SysCredit.Api.Services.Auth;

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Retinopathy.Api.Attributes;
using Retinopathy.Api.Interfaces;
using Retinopathy.DataTransferObject.Commons;

[Service<ITokenService>]
public class TokenService(IConfiguration Configuration) : ITokenService
{
    private readonly IConfiguration Configuration = Configuration;
    private readonly SymmetricSecurityKey Key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Token:Key"]!));

    public string GenerateToken(UserInfo? User, IEnumerable<Claim> Claims)
    {
        var Credentials = new SigningCredentials(Key, SecurityAlgorithms.HmacSha512Signature);

        var TokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(Claims),
            Expires = DateTime.Now.AddDays(1),
            SigningCredentials = Credentials,
            Issuer = Configuration["Token:Issuer"]
        }; 

        var TokenHandler = new JwtSecurityTokenHandler();

        var Token = TokenHandler.CreateToken(TokenDescriptor);

        return TokenHandler.WriteToken(Token);
    }
}
