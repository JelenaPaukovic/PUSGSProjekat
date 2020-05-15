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
    public class VoziloController : ControllerBase
    {
        private readonly ProjekatContext _context;

        public VoziloController(ProjekatContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vozilo>>> GetVozila()
        {
            return await _context.Vozila.ToListAsync();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vozilo>> GetVozila(int id)
        {
            var vozila = await _context.Vozila.FindAsync(id);

            if (vozila == null)
            {
                return NotFound();
            }

            return vozila;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [Route("UpdateVozilo")]
        public async Task<IActionResult> UpdateVozilo(Vozilo vozilo)
        {
            _context.Entry(vozilo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VozilaExists(vozilo.IdVozilo))
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
        [Route("AddVozilo")]
        public async Task<ActionResult<Vozilo>> AddVozilo(Vozilo vozilo)
        {

            _context.Vozila.Add(vozilo);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVozila", new { id = vozilo.IdVozilo }, vozilo);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteVozilo/{id}")]
        public async Task<ActionResult<Vozilo>> DeleteVozilo(int id)
        {
            var vozila = await _context.Vozila.FindAsync(id);
            if (vozila == null)
            {
                return NotFound();
            }

            _context.Vozila.Remove(vozila);
            await _context.SaveChangesAsync();

            return vozila;
        }

        private bool VozilaExists(int id)
        {
            return _context.Vozila.Any(e => e.IdVozilo == id);
        }
    }
}