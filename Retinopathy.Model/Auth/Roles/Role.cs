namespace Retinopathy.Model.Auth.Roles;

public record class Role : Entity
{
    public long RoleId { get; set; }
    public string RoleName { get; set; } = string.Empty;
}
