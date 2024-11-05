var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
var app = builder.Build();
app.UseCors(p =>
{
    p
    .AllowAnyHeader()
    .AllowAnyOrigin()
    .AllowAnyMethod();
});

app.MapGet("/", () => "Hello World!");

app.Run();
