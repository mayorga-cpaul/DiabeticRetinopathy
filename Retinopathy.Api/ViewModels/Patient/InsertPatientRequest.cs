namespace Retinopathy.Api.ViewModels.Patient;

using Retinopathy.Api.Contracts.Requests;
using Retinopathy.Api.ViewModels.Auth;
using Retinopathy.Model.Auth.Users;

public class InsertPatientRequest : IViewModel, IRequestValidator
{
    public long RetinopathyExamId { get; set; }

    public string UserName { get; set; } = string.Empty;
    
    public string Email { get; set; } = string.Empty;
    
    public string Password { get; set; } = string.Empty;
    
    public string Phone { get; set; } = string.Empty;

    public string Cedula { get; set; } = string.Empty;
    
    public long DoctorId { get; set; }
    
    public long NurseId { get; set; }
    
    public string ImageSource { get; set; } = string.Empty;
    
    public float Mild { get; set; }
    
    public float NoDiabeticRetinopathy { get; set; }
    
    public float Severe { get; set; }
    
    public float Moderate { get; set; }
    
    public float Proliferative { get; set; }
    
    public string AIAnalysis { get; set; } = string.Empty;
    
    public AssignRequestType[] Roles { get; set; } = Array.Empty<AssignRequestType>();
    
    public UserClaim[] UserClaims { get; set; } = Array.Empty<UserClaim>();
}
