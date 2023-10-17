namespace Retinopathy.DataTransferObject.Fetchs;

public record class FetchUsers
{
    public long UserId { get; set; }
    
    public string Cedula { get; set; } = string.Empty;
    
    public DateTime CreatedDate { get; set; }
    
    public string Email { get; set; } = string.Empty;
    
    public string Phone { get; set; } = string.Empty;
    
    public long RoleId { get; set; }
    
    public string RoleName { get; set; } = string.Empty;
}