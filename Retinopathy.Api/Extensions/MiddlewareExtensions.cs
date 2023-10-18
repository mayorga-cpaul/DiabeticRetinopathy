namespace Retinopathy.Api.Extensions;

using Retinopathy.Api.Middlewares;

public static class MiddlewareExtensions
{
    public static IApplicationBuilder UseCustomExceptionHandler(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<EyesCareMiddleware>();
    }

}
