namespace Retinopathy.Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Retinopathy.Api.Extensions.ResponsesExtensions;
using Retinopathy.Api.Interfaces;
using Retinopathy.Api.ViewModels.Patient;

public class RetinaController(IRetinaServices RetinaServices) : ControllerBase
{
    private readonly IRetinaServices RetinaServices = RetinaServices;
    [HttpGet("history")]
    public async Task<IActionResult> FetchHistoryPatientAssignedToDoctor([FromQuery] long patientId, [FromQuery] long doctorId)
    {
        var result = RetinaServices.FetchHistoryPatientAssignedToDoctorAsync(patientId, doctorId);
        return Ok(await result.ToResponseAsync());
    }

    [HttpGet("conditions")]
    public async Task<IActionResult> FetchRetinaConditionsByPatientId([FromQuery] long patientId)
    {
        var result = RetinaServices.FetchRetinaConditionsByPatientIdAsync(patientId);
        return Ok(await result.ToResponseAsync());
    }

    [HttpPost("patient")]
    public async Task<IActionResult> InsertPatient([FromBody] InsertPatientRequest request)
    {
        var result = await RetinaServices.InsertPatientAsync(request);
        return Ok(result);
    }

    [HttpPost("retinopathy-exam")]
    public async Task<IActionResult> InsertRetinopathyExamWhenExistPatient([FromBody] InsertRetinopathyExamWhenExistPatientRequest request)
    {
        var result = await RetinaServices.InsertRetinopathyExamWhenExistPatientAsync(request);
        return Ok(result);
    }

    [HttpPut("diagnosis-conclusion")]
    public async Task<IActionResult> UpdateDiagnosisConclusion([FromBody] UpdateDiagnosisConclusionRequest request)
    {
        await RetinaServices.UpdateDiagnosisConclusionAsync(request);
        return Ok("Diagnosis conclusion updated successfully");
    }
}
