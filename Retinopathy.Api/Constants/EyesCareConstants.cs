namespace Retinopathy.Api.Constants;

public class EyesCareConstants
{
    public const string Empty = "";

    public const string ConnectionStringKey = "EyesCareConnectionString";

    public const string ConnectionStringEnv = $"SQLCONNSTR_{ConnectionStringKey}";

    public const string CorsOriginsKey = "CorsOrigins";

    public const string CorsAllowSpecificOrigins = "CorsAllowSpecificOrigins";
}
