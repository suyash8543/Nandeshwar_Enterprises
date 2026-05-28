using SendGrid;
using SendGrid.Helpers.Mail;

namespace nandeshwar_enterprises_backend.Services
{
    public class EmailService
    {
        private readonly IConfiguration _config;

        public EmailService(IConfiguration config)
        {
            _config = config;
        }

        public async Task SendOtp(string toEmail, string otp)
        {
            var apiKey = _config["EmailSettings:SendGridApiKey"];
            var fromEmail = _config["EmailSettings:Email"];

            var client = new SendGridClient(apiKey);

            var msg = new SendGridMessage()
            {
                From = new EmailAddress(fromEmail, "Nandeshwar Enterprises"),
                Subject = "Your OTP Code",
                HtmlContent = $@"
                    <h2>Your OTP Code</h2>
                    <p>Your OTP is: <strong>{otp}</strong></p>
                    <p>Valid for 10 minutes.</p>
                "
            };

            msg.AddTo(new EmailAddress(toEmail));

            var response = await client.SendEmailAsync(msg);

            if (!response.IsSuccessStatusCode)
            {
                var body = await response.Body.ReadAsStringAsync();
                throw new Exception($"SendGrid error: {body}");
            }
        }
    }
}