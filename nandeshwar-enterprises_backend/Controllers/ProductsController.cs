using Microsoft.AspNetCore.Mvc;
using nandeshwar_enterprises_backend.Data;
using nandeshwar_enterprises_backend.Models;

namespace nandeshwar_enterprises_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get() => Ok(_context.Products.ToList());

        [HttpPost]
        public IActionResult Post(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return Ok(product);
        }
    }
}
