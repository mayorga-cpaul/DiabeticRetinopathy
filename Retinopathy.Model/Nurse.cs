namespace Retinopathy.Model;

public record class Nurse : Entity
{
    public long NurseId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string DNI { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
}
