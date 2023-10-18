namespace Retinopathy.Api.Extensions;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Retinopathy.Api.Attributes;
using Retinopathy.Api.Constants;
using Retinopathy.Api.Stores;
using Retinopathy.Model;
using System.Text;

public static class ServiceExtensions
{
    public static IServiceCollection AddEyesCareServices(this IServiceCollection Services)
    {
        var Types = from Type in typeof(Program).Assembly.GetTypes()
                    let ServiceAttribute = Type.LookupGenericAttribute(typeof(ServiceAttribute<>))
                    where ServiceAttribute is not null
                    let InterfaceType = ServiceAttribute.GetType().GetProperty(nameof(ServiceAttribute<IServiceCollection>.InterfaceType))!.GetValue(ServiceAttribute).As<Type>()
                    select (InterfaceType, Type);

        foreach (var (Interface, Type) in Types)
        {
            Services.AddScoped(Interface, Type);
        }

        return Services;
    }

    public static IServiceCollection AddEyesCareStores(this IServiceCollection Services)
    {
        Services.AddScoped<IStore, Store<Entity>>();
        Services.AddScoped(typeof(IStore<>), typeof(Store<>));
        return Services;
    }

    public static IServiceCollection AddEyesCareOptions(this IServiceCollection Services)
    {
        Services.AddOptions<RetinopathyOptions>()
            .Configure<IConfiguration>(static (Options, Configuration) =>
            {
                Configuration.GetSection(SettingsOptions.EyesCare).Bind(Options);

                Options.ConnectionString = Configuration.GetConnectionString(EyesCareConstants.ConnectionStringKey)!;

                if (string.IsNullOrEmpty(Options.ConnectionString))
                {
                    Options.ConnectionString = Environment.GetEnvironmentVariable(EyesCareConstants.ConnectionStringEnv)!;
                }
            });

        Services.Configure<ApiBehaviorOptions>(static Options => { });
        return Services;
    }

    public static IServiceCollection AddAuth(this IServiceCollection Services, IConfiguration Configuration)
    {
        Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(Options =>
            {
                Options.TokenValidationParameters = new TokenValidationParameters
                {
                    // Valida el emisor (issuer) del token.
                    ValidateIssuer = true,

                    // Valida la audiencia del token.
                    ValidateAudience = false,

                    // Valida la vigencia (lifetime) del token.
                    ValidateLifetime = true,

                    // Valida la firma del token usando una clave secreta.
                    ValidateIssuerSigningKey = true,

                    // Establece el emisor válido para la validación del token desde la configuración.
                    ValidIssuer = Configuration["Token:Issuer"],

                    // Establece la audiencia válida para la validación del token desde la configuración.
                    ValidAudience = Configuration["Token:Issuer"],

                    // Establece la clave de firma del token desde la configuración.
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Token:Key"]!))
                };
            });

        Services.AddAuthorization();

        return Services;
    }

    public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection Services)
    {
        Services.AddEndpointsApiExplorer();

        Services.AddSwaggerGen(Configurarion =>
        {
            var securitySchema = new OpenApiSecurityScheme
            {
                Description = "JWT Auth Bearer Scheme",
                Name = "Authorization",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.Http,
                Scheme = "Bearer",
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            };

            Configurarion.AddSecurityDefinition("Bearer", securitySchema);

            var securityRequirement = new OpenApiSecurityRequirement
            {
                {
                    securitySchema, new[] {"Bearer"}
                }
            };

            Configurarion.AddSecurityRequirement(securityRequirement);
        });

        return Services;
    }

}
