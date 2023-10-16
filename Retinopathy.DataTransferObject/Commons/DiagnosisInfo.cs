namespace Retinopathy.DataTransferObject.Commons;

public class DiagnosisInfo
{
    public long DianosticConclusionId { get; set; }

    public long PatientId { get; set; }
    
    public long DoctorId { get; set; }

    public long NurseId { get; set; }

    public long RetinopathyExamId { get; set; }

    public string UserName { get; set; } = string.Empty;
    
    public string Cedula { get; set; } = string.Empty;
    
    public string Email { get; set; } = string.Empty;
    
    public string Phone { get; set; } = string.Empty;
    
    public string ImageSource { get; set; } = string.Empty;
    
    public DateTime ModifiedDateExam { get; set; }
    
    public DateTime CreatedDateExam { get; set; }
    
    public DateTime CreatedDateDiagnosis { get;set; }
    
    public string AdditionalInformation { get; set; } = string.Empty;
    
    public string DiagnosisAndFindings { get; set; } = string.Empty;
    
    public string RiskFactors { get; set; } = string.Empty;
	
    public string TreatmentPlan { get; set; } = string.Empty;
}
