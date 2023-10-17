namespace Retinopathy.DataTransferObject.Fetchs;

public record class FetchHistoryPatientAssignedToDoctor
{
    public long UserId { get; set; }

    public string UserName { get; set; } = string.Empty;

    public DateTime CreatedDate { get; set; }

    public string Email { get; set; } = string.Empty;

    public string Phone { get; set; } = string.Empty;

    public long RetinopathyExamId { get; set; }

    public long NurseId { get; set; }

    public long DoctorId { get; set; }

    public string AdditionalInformation { get; set; } = string.Empty;

    public string DiagnosisAndFindings { get; set; } = string.Empty;

    public long DianosticConclusionId { get; set; }

    public string RiskFactors { get; set; } = string.Empty;

    public string TreatmentPlan { get; set; } = string.Empty;
}