namespace Retinopathy.Api.ViewModels.Patient;

using Retinopathy.Api.Contracts.Requests;

public class InsertRetinopathyExamWhenExistPatientRequest : IViewModel, IRequestValidator
{
    public long RetinopathyExamId { get; set; }
    
    public long NurseId { get; set; }
    
    public long PatientId { get; set; }
    
    public long DoctorId { get; set; }
    
    public string ImageSource { get; set; } = string.Empty;
    
    public float Mild { get; set; }
    
    public float NoDiabeticRetinopathy { get; set; }
    
    public float Severe { get; set; }
    
    public float Moderate { get; set; }
    
    public float Proliferative { get; set; }
    
    public string AIAnalysis { get; set; } = string.Empty;
}
