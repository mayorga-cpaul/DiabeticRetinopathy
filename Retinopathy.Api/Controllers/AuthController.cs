namespace Retinopathy.Api.Controllers;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Retinopathy.Api.Contracts.Response;
using Retinopathy.Api.Extensions.ResponsesExtensions;
using Retinopathy.Api.Helpers;
using Retinopathy.Api.Interfaces;
using Retinopathy.Api.ViewModels.Auth.Roles;
using Retinopathy.Api.ViewModels.Auth.Users;

public class AuthController(IUserServices AuthService) : ControllerBase
{
    private readonly IUserServices AuthService = AuthService;

    [AllowAnonymous]
    [HttpPost("register")]
    [ProducesResponseType(typeof(IResponse), StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(typeof(IResponse<EntityId>), StatusCodes.Status201Created)]
    [ProducesErrorResponseType(typeof(IResponse<CreateUserRequest>))]
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

    [AllowAnonymous]
    [HttpPost("create-role")]
    [ProducesResponseType(typeof(IResponse), StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(typeof(IResponse<EntityId>), StatusCodes.Status201Created)]
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
    [ProducesResponseType(typeof(IResponse), StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(typeof(IResponse<EntityId>), StatusCodes.Status201Created)]
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

    [AllowAnonymous]
    [HttpPost("users")]
    [ProducesResponseType(typeof(IResponse), StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(typeof(IResponse<EntityId>), StatusCodes.Status201Created)]
    [ProducesErrorResponseType(typeof(IResponse<TokenRequest>))]
    public async Task<IActionResult> Users()
    {
        var result = AuthService.FetchUsers();
        return Ok(await result.ToResponseAsync());
    }
}

