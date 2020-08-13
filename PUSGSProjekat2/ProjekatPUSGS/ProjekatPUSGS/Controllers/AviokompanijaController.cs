using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjekatPUSGS.Data;
using ProjekatPUSGS.Models;

namespace ProjekatPUSGS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AviokompanijaController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        public AviokompanijaController(AuthenticationContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aviokompanija>>> GetKomapnije()
        {
            return await _context.Kompanije.ToListAsync();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Aviokompanija>> GetKomapnije(int id)
        {
            var kompanije = await _context.Kompanije.FindAsync(id);

            if (kompanije == null)
            {
                return NotFound();
            }

            return kompanije;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [Route("UpdateKompanija")]
        public async Task<IActionResult> UpdateKompanija(Aviokompanija kompanija)
        {
            _context.Entry(kompanija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KompanijaExists(kompanija.IdAvio))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Books
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        [Route("AddKompanija")]
        public async Task<ActionResult<Aviokompanija>> AddKompanija(Aviokompanija kompanija)
        {

            _context.Kompanije.Add(kompanija);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKompanije", new { id = kompanija.IdAvio }, kompanija);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteKompanija/{id}")]
        public async Task<ActionResult<Aviokompanija>> DeleteKompanija(int id)
        {
            var kompanije = await _context.Kompanije.FindAsync(id);
            if (kompanije == null)
            {
                return NotFound();
            }

            _context.Kompanije.Remove(kompanije);
            await _context.SaveChangesAsync();

            return kompanije;
        }

        private bool KompanijaExists(int id)
        {
            return _context.Kompanije.Any(e => e.IdAvio == id);
        }
    }
}
