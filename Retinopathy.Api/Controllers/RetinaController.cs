namespace Retinopathy.Api.Controllers;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Retinopathy.Api.Extensions.ResponsesExtensions;
using Retinopathy.Api.Interfaces;
using Retinopathy.Api.ViewModels.Patient;

public class RetinaController(IRetinaServices RetinaServices) : ControllerBase
{
    private readonly IRetinaServices RetinaServices = RetinaServices;

    [Authorize]
    [HttpGet("history")]
    public async Task<IActionResult> FetchHistoryPatientAssignedToDoctor([FromQuery] long patientId, [FromQuery] long doctorId)
    {
        var Result = RetinaServices.FetchHistoryPatientAssignedToDoctorAsync(patientId, doctorId);
        
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
    [HttpGet("conditions")]
    public async Task<IActionResult> FetchRetinaConditionsByPatientId([FromQuery] long patientId)
    {
        var Result = RetinaServices.FetchRetinaConditionsByPatientIdAsync(patientId);
        
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
    [HttpPost("patient")]
    public async Task<IActionResult> InsertPatient([FromBody] InsertPatientRequest request)
    {
        var (EntityId, Result) = await RetinaServices.InsertPatientAsync(request);
        
        if (EntityId is null)
        {
            return StatusCode(StatusCodes.Status400BadRequest, await Request.ToResponseAsync());
        }
        else
        {
            return StatusCode(StatusCodes.Status201Created, $"{EntityId} {Result}");
        }
    }

    [Authorize]
    [HttpPost("retinopathy-exam")]
    public async Task<IActionResult> InsertRetinopathyExamWhenExistPatient([FromBody] InsertRetinopathyExamWhenExistPatientRequest request)
    {
        var Result = await RetinaServices.InsertRetinopathyExamWhenExistPatientAsync(request);

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
    [HttpPut("diagnosis-conclusion")]
    public async Task<IActionResult> UpdateDiagnosisConclusion([FromBody] UpdateDiagnosisConclusionRequest request)
    {
        await RetinaServices.UpdateDiagnosisConclusionAsync(request);
        return Ok("Diagnosis conclusion updated successfully");
    }
}
