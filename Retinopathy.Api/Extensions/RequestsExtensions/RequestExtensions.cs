namespace Retinopathy.Api.Extensions.RequestExtension;

using FluentValidation;
using FluentValidation.Results;
using Retinopathy.Api.Attributes;
using Retinopathy.Api.Contracts.Requests;
using Retinopathy.Api.Exceptions;
using Retinopathy.Api.Extensions.RequestsExtensions;

public static class RequestExtensions
{
    /// <summary>
    ///     Realiza una validación sobre el objeto <paramref name="Request" />.
    /// </summary>
    /// <param name="Request">
    ///     Objeto que será validado usando alguna clase derivada de <see cref="AbstractValidator{T}" /> que tenga configurada mediente el atributo <see cref="ValidatorAttribute{TValidator}" />.
    /// </param>
    /// <param name="ContextData">
    ///     Datos adicionales usados por la validación.
    /// </param>
    /// <param name="Cancellation">
    ///     Permite cancelar una validación si está en algún proceso asincrono.
    /// </param>
    /// <returns>
    ///     Regresa los resultados de validar el objeto <paramref name="Request" />.
    /// </returns>
    public static async ValueTask<ValidationResult> ValidateAsync(this IRequestValidator Request, IDictionary<string, object>? ContextData = null, CancellationToken Cancellation = default)
    {
        Type ValidatorType = Request.LookupGenericTypeArgumentsFromGenericAttribute(typeof(ValidatorAttribute<>))![0];
        IValidator Validator = Activator.CreateInstance(ValidatorType).As<IValidator>()!;
        IValidationContext Context = Activator.CreateInstance(typeof(ValidationContext<>).MakeGenericType(Request.GetType()), new object[] { Request }).As<IValidationContext>()!;
        Context.RootContextData.AddRange(ContextData.DefaultIfNullOrEmpty());
        return await Validator.ValidateAsync(Context, Cancellation);
    }

    public static async Task ValidateRequestAsync(this Contracts.Requests.IRequestValidator Request, string MethodId, string ErrorMessage, string ErrorCode, string ErrorCategory, IDictionary<string, object>? ContextData = null, CancellationToken Cancellation = default)
    {
        var ValidationResult = await Request.ValidateAsync(ContextData, Cancellation);

        if (ValidationResult.HasError())
        {
            throw new EyesCareException(new()
            {
                HasError = true,
                ErrorCode = ErrorCode,
                ErrorCategory = ErrorCategory,
                ErrorMessage = ErrorMessage,
                MethodId = MethodId,
                Errors = ValidationResult.ErrorsToDictionaryWithErrorCode(),
            });
        }
    }
}
