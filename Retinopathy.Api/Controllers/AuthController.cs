﻿namespace Retinopathy.Api.Controllers;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Retinopathy.Api.Contracts.Response;
using Retinopathy.Api.Extensions.ResponsesExtensions;
using Retinopathy.Api.Helpers;
using Retinopathy.Api.Interfaces;
using Retinopathy.Api.ViewModels.Auth.Roles;
using Retinopathy.Api.ViewModels.Auth.Users;

public class AuthController(IAuthService AuthService) : ControllerBase
{
    private readonly IAuthService AuthService = AuthService;

    [AllowAnonymous]
    [HttpPost("/Api/Account/Register")]
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
    [HttpPost("/Api/Account/CreateRole")]
    [ProducesResponseType(typeof(IResponse), StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(typeof(IResponse<EntityId>), StatusCodes.Status201Created)]
    [ProducesErrorResponseType(typeof(IResponse<CreateRoleRequest>))]
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
    [HttpPost("/Api/Auth/Token")]
    [ProducesResponseType(typeof(IResponse), StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(typeof(IResponse<EntityId>), StatusCodes.Status201Created)]
    [ProducesErrorResponseType(typeof(IResponse<TokenRequest>))]
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
}
