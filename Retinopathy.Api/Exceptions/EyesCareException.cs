namespace Retinopathy.Api.Exceptions;

public class EyesCareException(ErrorStatus Status, Exception? InnerException = null) : Exception(Status.ErrorMessage, InnerException)
{
    /// <summary>
    /// 
    /// </summary>
    public ErrorStatus Status { get; } = Status with { HasError = true };
}
