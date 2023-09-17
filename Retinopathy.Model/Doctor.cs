namespace Retinopathy.Model;

public record class Doctor : Entity
{
    public long DoctorId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string DNI { get; set; } = string.Empty;
}
