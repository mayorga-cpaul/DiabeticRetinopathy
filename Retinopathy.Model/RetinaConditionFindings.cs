namespace Retinopathy.Model;

public record class RetinaConditionFindings : Entity
{
    public long RetinaConditionFindingsId { get; set; }

    public long RetinopathyExamId { get; set; }

    public double Mild { get; set; }
    
    public double NoDiabeticRetinopathy { get; set; }
    
    public double Severe { get; set; }
    
    public double Moderate { get; set; }

    public double Proliferative { get; set; }

    public string AIAnalysis { get; set; } = string.Empty;
}