using GearScout.Domain.Entities;
using GearScout.Infrastructure.Repositories;
using GearScout.Api.DTOs;
using GearScout.Application.Interfaces;
using Microsoft.AspNetCore.Identity;
namespace GearScout.Application.Services;
public class UserService {



    private IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    // public UserService() { }

    public async Task<IEnumerable<UserResponseDto>> GetAllUsersAsync()
    {
        var users = await _userRepository.GetAllAsync();
        var userDtos = users.Select(user => user.ToResponse());
        return userDtos;
    }

    public async Task CreateUserAsync(RegisterUserDto request)
    {
        User user = request.ToUser();
        var hasher = new PasswordHasher<User>();
        user.PasswordHash = hasher.HashPassword(user, request.Password);
   
        await _userRepository.AddAsync(user);
        await _userRepository.SaveChangesAsync();
    }
    

}