namespace Retinopathy.DataTransferObject.Fetchs;

public record class FetchPatientsAssignedToDoctor
{
    public long PatientId { get; set; }
    
    public long DoctorId { get; set; }
    
    public string ImageSource { get; set; } = string.Empty;
    
    public long NurseId { get; set; }
    
    public long RetinopathyExamId { get; set; }
    
    public DateTime CreatedDate { get; set; }
    
    public DateTime CreatedDateRetinaConditions { get; set; }
    
    public long DianosticConclusionId { get; set; }
    
    public string TreatmentPlan { get; set; } = string.Empty;
    
    public string AdditionalInformation { get; set; } = string.Empty;
    
    public string RiskFactors { get; set; } = string.Empty;
}