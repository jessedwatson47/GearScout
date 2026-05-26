using GearScout.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace GearScout.Api.DTOs;

// Jesse if yo uread this. Make a generic singular mapper. Where Property of X matches Property of Y (DTO).
public static class UserMappings
{
    public static UserResponseDto ToResponse(this User user)
    {
        return new UserResponseDto
        {
            Id = user.Id,
            Username = user.Username,
            Email = user.Email,
            Role = user.Role,
            CreatedAt = user.CreatedAt,
        };
    }

    public static User ToUser(this RegisterUserDto request)
    {
        var now = DateTime.UtcNow;
        return new User
        {
            Username = request.Username,
            Email = request.Email,
            PasswordHash = string.Empty,
            Role = request.Role,
            CreatedAt = now,
            ModifiedAt = now
        };
    }
}