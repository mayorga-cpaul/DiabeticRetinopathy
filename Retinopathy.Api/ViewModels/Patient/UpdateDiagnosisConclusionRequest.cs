namespace Retinopathy.Api.ViewModels.Patient;

using Retinopathy.Api.Contracts.Requests;

public class UpdateDiagnosisConclusionRequest : IViewModel, IRequestValidator
{
    public long DoctorId { get; set; }

    public long RetinopathyExamId { get; set; }

    public string RiskFactors { get; set; } = string.Empty;

    public string DiagnosisAndFindings { get; set; } = string.Empty;

    public string TreatmentPlan { get; set; } = string.Empty;

    public string AdditionalInformation { get; set; } = string.Empty;
}