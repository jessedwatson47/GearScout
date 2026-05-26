using GearScout.Domain.Entities;

namespace GearScout.Application.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {

        // Task<IEnumerable<User>> GetAdminsAsync();
        // Task<User?> GetByIdAsync(int id);
        // Task<User?> GetByEmailAsync(string email);
        // Task<bool> ExistsAsync(string email);


        // Task<User> AddAsync(User user);
        

        // Task<bool> UpdateAsync(User user);
        // Task<bool> DeleteAsync(int id);
    }
}