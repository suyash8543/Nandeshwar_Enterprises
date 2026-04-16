using System.Net;
using System.Net.Mail;

namespace nandeshwar_enterprises_backend.Services
{
    public class EmailService
    {
        public void SendOtp(string toEmail, string otp)
        {
            // ✅ WRITE HERE
            var fromEmail = "stripathi8543@gmail.com";
            var password = "jiyucqwzqltpmxil"; // App password (no spaces)

            var smtp = new SmtpClient("smtp.gmail.com", 587)
            {
                Credentials = new NetworkCredential(fromEmail, password),
                EnableSsl = true
            };

            var message = new MailMessage(fromEmail, toEmail)
            {
                Subject = "Your OTP Code",
                Body = $"Your OTP is: {otp}"
            };

            smtp.Send(message);
        }
    }
}