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
    public class RentacarServisController : ControllerBase
    {
        private readonly ProjekatContext _context;
        public RentacarServisController(ProjekatContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentacarServis>>> GetServisi()
        {
            return await _context.Servisi.ToListAsync();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RentacarServis>> GetServisi(int id)
        {
            var servisi = await _context.Servisi.FindAsync(id);

            if (servisi == null)
            {
                return NotFound();
            }

            return servisi;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [Route("UpdateServis")]
        public async Task<IActionResult> UpdateServis(RentacarServis servis)
        {
            _context.Entry(servis).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServisiExists(servis.IdServis))
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
        [Route("AddServis")]
        public async Task<ActionResult<RentacarServis>> AddServis(RentacarServis servis)
        {

            _context.Servisi.Add(servis);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServisi", new { id = servis.IdServis }, servis);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteServis/{id}")]
        public async Task<ActionResult<RentacarServis>> DeleteServis(int id)
        {
            var servisi = await _context.Servisi.FindAsync(id);
            if (servisi == null)
            {
                return NotFound();
            }

            _context.Servisi.Remove(servisi);
            await _context.SaveChangesAsync();

            return servisi;
        }

        private bool ServisiExists(int id)
        {
            return _context.Servisi.Any(e => e.IdServis == id);
        }
    }
}