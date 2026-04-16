using Microsoft.AspNetCore.Mvc;
using nandeshwar_enterprises_backend.Data;
using nandeshwar_enterprises_backend.DTOs;
using nandeshwar_enterprises_backend.Models;
using nandeshwar_enterprises_backend.Services;

namespace nandeshwar_enterprises_backend.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly EmailService _emailService;

        public AuthController(AppDbContext context, EmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        // ✅ SEND OTP
        [HttpPost("send-otp")]
        public IActionResult SendOtp([FromBody] EmailDto dto)
        {
            var admin = _context.Admins.FirstOrDefault(a => a.Email == dto.Email);

            if (admin == null)
                return NotFound("Email not found");

            var otp = new Random().Next(100000, 999999).ToString();

            admin.Otp = otp;
            admin.OtpExpiry = DateTime.UtcNow.AddMinutes(5);

            _context.SaveChanges();

            _emailService.SendOtp(dto.Email, otp);

            return Ok("OTP sent");
        }

        // ✅ VERIFY OTP
        [HttpPost("verify-otp")]
        public IActionResult VerifyOtp([FromBody] VerifyOtpDto dto)
        {
            var admin = _context.Admins
    .FirstOrDefault(a => a.Email.Trim().ToLower() == dto.Email.Trim().ToLower());

            if (admin == null ||
                admin.Otp != dto.Otp ||
                admin.OtpExpiry < DateTime.UtcNow)
            {
                return BadRequest("Invalid or expired OTP");
            }
            Console.WriteLine("DB Emails:");
            foreach (var a in _context.Admins)
            {
                Console.WriteLine($"'{a.Email}'");
            }

            Console.WriteLine("INPUT EMAIL: '" + dto.Email + "'");

            return Ok("Login successful");
        }
    }
}