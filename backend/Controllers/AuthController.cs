using Google.Apis.Auth;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

public record GoogleLoginRequest(string Credential);

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public AuthController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost("google")]
    public async Task<IActionResult> GoogleLogin([FromBody] GoogleLoginRequest request)
    {
        var clientId = _configuration["GoogleAuth:ClientId"];

        try
        {
            var payload = await GoogleJsonWebSignature.ValidateAsync(request.Credential, new GoogleJsonWebSignature.ValidationSettings
            {
                Audience = new[] { clientId }
            });

            return Ok(new
            {
                success = true,
                name = payload.Name,
                email = payload.Email,
                picture = payload.Picture
            });
        }
        catch (InvalidJwtException)
        {
            return Unauthorized(new { success = false, message = "Token de Google inválido." });
        }
    }
}
