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

app.MapPost("/fileUpload", (FileUploadRequestBody body) => {
    Console.WriteLine("in file upload");
    Console.WriteLine(body.Base64File);
});

app.Run();

record FileUploadRequestBody(
    string Base64File
);