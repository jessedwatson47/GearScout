namespace GearScout.Domain.Entities;


public class User
{
    public int Id {get; set;}
    public string Username {get; set;} = string.Empty;

    public string Email {get; set;} = string.Empty;

    public string PasswordHash {get; set;} = string.Empty;
    public string Role {get; set;} = "user";

    public DateTime CreatedAt {get; set;}
    public DateTime ModifiedAt {get; set;}

    public User() { }

    public User(int id, string username, string passwordHash, string role, DateTime createdAt, DateTime modifiedAt)
    {
        this.Id = id;
        this.Username = username;
        this.PasswordHash = passwordHash;
        this.Role = role;
        this.CreatedAt = createdAt;
        this.ModifiedAt = modifiedAt;
    }
}