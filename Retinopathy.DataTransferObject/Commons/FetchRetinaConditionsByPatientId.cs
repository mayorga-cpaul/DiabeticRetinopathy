namespace Retinopathy.DataTransferObject.Commons;

public class FetchRetinaConditionsByPatientId
{
    public long RetinaConditionFindingsId { get; set; }
    
    public long PatientId { get; set; }
    
    public long NurseId { get; set; }
    
    public long RetinopathyExamId { get; set; }
    
    public string UserName { get; set; } = string.Empty;
    
    public string Cedula { get; set; } = string.Empty;
    
    public string Email { get; set; } = string.Empty;
    
    public string Phone { get; set; } = string.Empty;
    
    public string ImageSource { get; set; } = string.Empty;
    
    public DateTime ModifiedDateExam { get; set; }
    
    public DateTime CreatedDateExam { get; set; }
    
    public DateTime CreatedDateRetinaConditions { get; set; }
    
    public bool Moderate { get; set; }
    
    public bool Mild { get; set; }
    
    public bool Proliferative { get; set; }
    
    public bool NoDiabeticRetinopathy { get; set; }
    
    public bool Severe { get; set; }
    
    public string AIAnalysis { get; set; } = string.Empty;
}