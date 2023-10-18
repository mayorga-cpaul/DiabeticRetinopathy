namespace Retinopathy.Api.Interfaces;

using Retinopathy.Api.ViewModels.Auth.Users;
using Retinopathy.Api.Helpers;
using Retinopathy.Api.ViewModels.Auth.Roles;
using Retinopathy.DataTransferObject.Commons;
using Retinopathy.DataTransferObject.Fetchs;

public interface IUserServices
{
    Task<UserInfo?> CreateUserAsync(CreateUserRequest Request);
    
    Task<UserInfo?> FetchUserByEmailAsync(string? Email);
    
    Task<UserInfo?> FetchUserByIdAsync(long? UserId);
    
    Task<UserInfo?> FetchUserByUserNameAsync(string? Name);
    
    Task<UserInfo?> FetchUserByPhoneAsync(string? Phone);
    
    IAsyncEnumerable<FetchPatientsAssignedToDoctor> FetchPatientsAssignedToDoctorAsync(long DoctorId);

    Task<EntityId?> CreateRoleAsync(CreateRoleRequest Request);

    Task<AuthInfo?> TokenRequestAsync(TokenRequest TokenRequest);

    IAsyncEnumerable<FetchUsers> FetchUsers();
}
