namespace Retinopathy.Api.Controllers;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Retinopathy.Api.Extensions.ResponsesExtensions;
using Retinopathy.Api.Interfaces;
using Retinopathy.Api.ViewModels.Auth.Roles;
using Retinopathy.Api.ViewModels.Auth.Users;

public class AuthController(IUserServices AuthService) : ControllerBase
{
    private readonly IUserServices AuthService = AuthService;

    [Authorize]
    [HttpPost("register")]
    public async Task<IActionResult> CreateUserAsync([FromBody] CreateUserRequest Request)
    {
        var Result = await AuthService.CreateUserAsync(Request);

        if (Result is null)
        {
            return StatusCode(StatusCodes.Status400BadRequest, await Request.ToResponseAsync());
        }
        else
        {
            return StatusCode(StatusCodes.Status201Created, Result);
        }
    }

    [Authorize]
    [HttpPost("create-role")]
    public async Task<IActionResult> CreateRoleAsync([FromBody] CreateRoleRequest Request)
    {
        var Result = await AuthService.CreateRoleAsync(Request);

        if (Result is null)
        {
            return StatusCode(StatusCodes.Status400BadRequest, await Request.ToResponseAsync());
        }
        else
        {
            return StatusCode(StatusCodes.Status201Created, Result);
        }
    }

    [AllowAnonymous]
    [HttpPost("token")]
    public async Task<IActionResult> TokenAsync([FromBody] TokenRequest Request)
    {
        var Result = await AuthService.TokenRequestAsync(Request);

        if (Result is null)
        {
            return StatusCode(StatusCodes.Status400BadRequest, await Request.ToResponseAsync());
        }
        else
        {
            return StatusCode(StatusCodes.Status201Created, Result);
        }
    }

    [Authorize]
    [HttpPost("users")]
    public async Task<IActionResult> Users()
    {
        var Result = AuthService.FetchUsers();

        if (Result is null)
        {
            return StatusCode(StatusCodes.Status400BadRequest, await Request.ToResponseAsync());
        }
        else
        {
            return StatusCode(StatusCodes.Status201Created, Result);
        }
    }


    [Authorize]
    [HttpPost("user-by-id")]
    public async Task<IActionResult> GetUserById(long UserId)
    {
        var Result = await AuthService.FetchUserByIdAsync(UserId);

        if (Result is null)
        {
            return StatusCode(StatusCodes.Status400BadRequest, await Request.ToResponseAsync());
        }
        else
        {
            return StatusCode(StatusCodes.Status201Created, Result);
        }
    }

    [Authorize]
    [HttpPost("user-by-name")]
    public async Task<IActionResult> GetUserByName(string Name)
    {
        var Result = await AuthService.FetchUserByUserNameAsync(Name);

        if (Result is null)
        {
            return StatusCode(StatusCodes.Status400BadRequest, await Request.ToResponseAsync());
        }
        else
        {
            return StatusCode(StatusCodes.Status201Created, Result);
        }
    }
}

