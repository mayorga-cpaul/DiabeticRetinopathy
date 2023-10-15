namespace Retinopathy.Api.Interfaces;

using Retinopathy.DataTransferObject.Commons;
using System.Security.Claims;

public interface ITokenService
{
    string GenerateToken(UserInfo? User, IEnumerable<Claim> Claims);
}
