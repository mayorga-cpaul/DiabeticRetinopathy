namespace Retinopathy.Model;

public record class DiagnosisConclusion : Entity
{
    public long DianosticConclusionId { get; set; }

    public long DoctorId { get; set; }

    public long RetinopathyExamId { get; set; }

    public string RiskFactors { get; set; } = string.Empty;

    public string DiagnosisAndFindings { get; set; } = string.Empty;

    public string TreatmentPlan { get; set; } = string.Empty;

    public string AdditionalInformation { get; set; } = string.Empty;
}