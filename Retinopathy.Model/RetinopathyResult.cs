namespace Retinopathy.Model;

public record class RetinopathyResult : Entity
{
    public long RetinopathyResultId { get; set; }
    public double? Mild { get; set; }
    public double? NO_DR { get; set; }
    public double? Severe { get; set; }
    public double? Moderate { get; set; }
    public double? Proliferative { get; set; }
}
