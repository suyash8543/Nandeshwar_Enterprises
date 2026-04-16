using Microsoft.EntityFrameworkCore;
using nandeshwar_enterprises_backend.Models;

namespace nandeshwar_enterprises_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // ✅ ADD THESE (THIS IS YOUR ERROR FIX)
        public DbSet<Project> Projects { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Admin> Admins { get; set; }
    }
}