using Retinopathy.Api.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuth(builder.Configuration);
builder.Services.AddSwaggerDocumentation();
builder.Services.AddEyesCareOptions();

builder.Services.AddEyesCareStores();
builder.Services.AddEyesCareServices();

var app = builder.Build();


app.UseCustomExceptionHandler();

app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();