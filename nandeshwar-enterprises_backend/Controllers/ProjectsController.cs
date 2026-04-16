using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using nandeshwar_enterprises_backend.Data;
using nandeshwar_enterprises_backend.Models;

namespace nandeshwar_enterprises_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }

        // GET
        [HttpGet]
        public IActionResult GetProjects()
        {
            return Ok(_context.Projects.ToList());
        }

        [HttpPost]
        public IActionResult AddProject([FromBody] Project project)
        {
            try
            {
                if (project == null)
                    return BadRequest("Project is null");

                project.Title ??= "";
                project.Description ??= "";
                project.ImageBase64 ??= "";

                _context.Projects.Add(project);
                _context.SaveChanges();

                return Ok(project);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message); // ✅ SHOW ERROR
            }
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteProject(int id)
        {
            var project = _context.Projects.Find(id);

            if (project == null)
                return NotFound();

            _context.Projects.Remove(project);
            _context.SaveChanges();

            return Ok();
        }
    }
}