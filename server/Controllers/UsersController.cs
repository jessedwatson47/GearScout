using GearScout.Api.DTOs;
using Microsoft.AspNetCore.Mvc;
using GearScout.Application.Services;
using GearScout.Domain.Entities;
namespace GearScout.Api.Controllers;
[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{

    private UserService _userService;

    public UsersController(UserService userService)
    {
        _userService = userService;
    }


    [HttpGet()]
    public async Task<ActionResult<IEnumerable<UserResponseDto>>> GetUsers()
    {
        var userDtos = await _userService.GetAllUsersAsync();
        return Ok(userDtos);
    }

    [HttpPost("register")]
    public async Task<ActionResult> Register(RegisterUserDto request)
    {
        if (request is null) throw new ArgumentNullException();

        await _userService.CreateUserAsync(request);

        return NoContent();
    }

}