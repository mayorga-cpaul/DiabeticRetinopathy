using Microsoft.AspNetCore.Mvc;

namespace Retinopathy.Api.Controllers;

public class TestController : ControllerBase
{
    [HttpGet("sample")]
    public IActionResult GetSampleData()
    {
        // Datos de ejemplo
        var sampleData = new List<string>
        {
            "Dato 1",
            "Dato 2",
            "Dato 3"
        };

        // Devolver los datos como JSON
        return Ok(sampleData);
    }
}
