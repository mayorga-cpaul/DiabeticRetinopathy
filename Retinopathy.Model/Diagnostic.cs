namespace Retinopathy.Model;

public record class Diagnostic : Entity
{
    public long DiagnosticId { get; set; }
    public long? DoctorId { get; set; }
    public long NurseId { get; set; }
    public long RetinopathyResultId { get; set; }
    public long PatientId { get; set; }
    public string PatientStatus { get; set; } = string.Empty;
    public string Observations { get; set; } = string.Empty;
}
