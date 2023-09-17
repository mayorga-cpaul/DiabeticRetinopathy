namespace Retinopathy.Model;

public record class RoleUser : Entity
{
    public long RoleUserId { get; set; }
    public long RoleId { get; set; }
    public long UserId { get; set; }
}
