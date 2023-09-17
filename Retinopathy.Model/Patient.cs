namespace Retinopathy.Model;

public record class Patient : Entity
{
    public long PatientId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string DNI { get; set; } = string.Empty;
    public DateTime? Age { get; set; }
    public string City { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
}
