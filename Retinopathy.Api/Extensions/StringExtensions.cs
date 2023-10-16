namespace Retinopathy.Api.Extensions;

using System;
using System.Text;

public static class StringExtensions
{
    private const string UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private const string LowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    private const string DigitChars = "0123456789";
    private const string SpecialChars = "!@#$%^&*()-_+=<>?";

    public static string GenerateRandomPassword(this 
        string str,
        int length = 10, 
        bool useUpperCase = true, 
        bool useLowerCase = true, 
        bool useDigits = true, 
        bool useSpecialChars = true)
    {
        if (length <= 0)
        {
            throw new ArgumentException("La longitud de la contraseña debe ser mayor que 0.");
        }

        if (!useUpperCase && !useLowerCase && !useDigits && !useSpecialChars)
        {
            throw new ArgumentException("Debes seleccionar al menos un conjunto de caracteres para generar la contraseña.");
        }

        var allowedChars = new StringBuilder();
        if (useUpperCase)
        {
            allowedChars.Append(UpperCaseChars);
        }
        if (useLowerCase)
        {
            allowedChars.Append(LowerCaseChars);
        }
        if (useDigits)
        {
            allowedChars.Append(DigitChars);
        }
        if (useSpecialChars)
        {
            allowedChars.Append(SpecialChars);
        }

        if (allowedChars.Length == 0)
        {
            throw new ArgumentException("No se ha seleccionado ningún conjunto de caracteres.");
        }

        var random = new Random();
        var password = new StringBuilder(length);
        for (int i = 0; i < length; i++)
        {
            int index = random.Next(0, allowedChars.Length);
            password.Append(allowedChars[index]);
        }

        return password.ToString();
    }
}
