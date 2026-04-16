using Microsoft.AspNetCore.Mvc;
using nandeshwar_enterprises_backend.Data;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly AppDbContext _context;

    public ContactController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult AddContact([FromBody] Contact contact)
    {
        try
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();

            return Ok("Saved successfully");
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
    [HttpGet]
    public IActionResult GetContacts()
    {
        var contacts = _context.Contacts.ToList();
        return Ok(contacts);
    }
    [HttpDelete("{id}")]
    public IActionResult DeleteContact(int id)
    {
        var contact = _context.Contacts.Find(id);

        if (contact == null)
            return NotFound();

        _context.Contacts.Remove(contact);
        _context.SaveChanges();

        return Ok(new { message = "Deleted successfully" });
    }
}