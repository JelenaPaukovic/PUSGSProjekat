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
    public class LetoviController : ControllerBase
    {
        private readonly ProjekatContext _context;

        public LetoviController(ProjekatContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Letovi>>> GetLetovi()
        {
            return await _context.Let.ToListAsync();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Letovi>> GetLetovi(int id)
        {
            var letovi = await _context.Let.FindAsync(id);

            if (letovi == null)
            {
                return NotFound();
            }

            return letovi;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [Route("UpdateLetovi")]
        public async Task<IActionResult> UpdateLetovi(Letovi letovi)
        {
            _context.Entry(letovi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LetoviExists(letovi.IdLet))
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
        [Route("AddLetovi")]
        public async Task<ActionResult<Letovi>> AddLetovi(Letovi letovi)
        {

            _context.Let.Add(letovi);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLetovi", new { id = letovi.IdLet }, letovi);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteLetovi/{id}")]
        public async Task<ActionResult<Letovi>> DeleteLetovi(int id)
        {
            var letovi = await _context.Let.FindAsync(id);
            if (letovi == null)
            {
                return NotFound();
            }

            _context.Let.Remove(letovi);
            await _context.SaveChangesAsync();

            return letovi;
        }

        private bool LetoviExists(int id)
        {
            return _context.Let.Any(e => e.IdLet == id);
        }
    }
}