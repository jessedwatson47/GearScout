using GearScout.Application.Interfaces;
using GearScout.Domain.Entities;
using GearScout.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace GearScout.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<User>> GetAllAsync()
    {
        List<User> users = await _context.Users.ToListAsync();
        
        return users;
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }

    public async Task AddAsync(User user)
    {
        await _context.Users.AddAsync(user);
    }
        // Task<IEnumerable<User>> GetAdminsAsync() { return new User();}
        // Task<User?> GetByIdAsync(int id);
        // Task<User?> GetByEmailAsync(string email);
        // Task<bool> ExistsAsync(string email);


        // Task<User> AddAsync(User user);
        

        // Task<bool> UpdateAsync(User user);
        // Task<bool> DeleteAsync(int id);


}