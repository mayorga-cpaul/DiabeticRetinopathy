namespace Retinopathy.Api.Extensions;

using Retinopathy.Api.Exceptions;
using System.Reflection;

public static class ExceptionExtensions
{
    public static IEnumerable<Exception> GetExceptions(this Exception? Ex)
    {
        while (Ex is not null)
        {
            yield return Ex;
            Ex = Ex.InnerException;
        }
    }

    public static IDictionary<string, object?> ExceptionsToDictionary(this Exception? Ex)
    {
        return Ex.GetExceptions().ToDictionary<Exception, string, object?>(Ex => Ex.GetType().Name, Ex => Ex.Message);
    }

    public static EyesCareException ToEyesCareException(this Exception Ex)
    {
        EyesCareException EyesCareException = new(new()
        {
            MethodId = "",
            ErrorCode = "",
            ErrorMessage = "",
            ErrorCategory = "",
            Errors = Ex.ExceptionsToDictionary()
        }, Ex);

        return EyesCareException;
    }
}
