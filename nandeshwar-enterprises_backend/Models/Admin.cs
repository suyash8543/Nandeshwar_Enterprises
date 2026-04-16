namespace nandeshwar_enterprises_backend.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string? Otp { get; set; }
        public DateTime? OtpExpiry { get; set; }
    }
}