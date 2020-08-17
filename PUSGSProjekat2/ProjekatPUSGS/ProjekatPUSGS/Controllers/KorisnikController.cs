using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjekatPUSGS.Data;
using ProjekatPUSGS.Models;

//namespace ProjekatPUSGS.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class KorisnikController : ControllerBase
//    {
//        private readonly AuthenticationContext _context;

//        public KorisnikController(AuthenticationContext context)
//        {
//            _context = context;
//        }

//        // GET: api/Books
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<Korisnik>>> GetKorisnici()
//        {
//            return await _context.Korisnici.ToListAsync();
//        }

//        // GET: api/Books/5
//        [HttpGet("{id}")]
//        public async Task<ActionResult<Korisnik>> GetKorisnici(int id)
//        {
//            var korisnici = await _context.Korisnici.FindAsync(id);

//            if (korisnici == null)
//            {
//                return NotFound();
//            }

//            return korisnici;
//        }

//        // PUT: api/Books/5
//        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
//        // more details see https://aka.ms/RazorPagesCRUD.
//        [Route("UpdateKorisnik")]
//        public async Task<IActionResult> UpdateKorisnik(Korisnik korisnik)
//        {
//            _context.Entry(korisnik).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!KorisniciExists(korisnik.IdKorisnik))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return NoContent();
//        }

//        // POST: api/Books
//        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
//        // more details see https://aka.ms/RazorPagesCRUD.
//        [HttpPost]
//        [Route("AddKorisnik")]
//        public async Task<ActionResult<Korisnik>> AddKorisnik(Korisnik korisnik)
//        {

//            _context.Korisnici.Add(korisnik);

//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetKorisnici", new { id = korisnik.IdKorisnik }, korisnik);
//        }

//        // DELETE: api/Books/5
//        [HttpDelete]
//        [Route("DeleteKorisnik/{id}")]
//        public async Task<ActionResult<Korisnik>> DeleteKorisnik(int id)
//        {
//            var korisnici = await _context.Korisnici.FindAsync(id);
//            if (korisnici == null)
//            {
//                return NotFound();
//            }

//            _context.Korisnici.Remove(korisnici);
//            await _context.SaveChangesAsync();

//            return korisnici;
//        }

//        private bool KorisniciExists(int id)
//        {
//            return _context.Korisnici.Any(e => e.IdKorisnik == id);
//        }
//    }
//}