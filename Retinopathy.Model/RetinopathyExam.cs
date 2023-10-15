namespace Retinopathy.Model;

public record class RetinopathyExam : Entity
{
    public long RetinopathyExamId { get; set; }

    public long PatientId { get; set; }

    public string ImageSource { get; set; } = string.Empty;
}