using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjekatPUSGS.Data;
using ProjekatPUSGS.Models;
using ProjekatPUSGS.Servisi;

namespace ProjekatPUSGS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RezervacijaLetovaController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private RezervacijaLetovaServis servis;

        public RezervacijaLetovaController(AuthenticationContext context)
        {
            _context = context;
            servis = new RezervacijaLetovaServis(_context);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RezervacijaLetova>>> GetRezervacijeLetova(int id)
        {
            return await _context.RezervacijeLetova.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RezervacijaLetova>> GetRezervacijaLetova(int id)
        {
            var rezervacija = await _context.RezervacijeLetova.FindAsync(id);

            if (rezervacija == null)
            {
                return NotFound();
            }

            return rezervacija;
        }
        [HttpGet]
        [Route("GetRezervacijeLetovaZaOdredjenog/{email}")]
        public async Task<ActionResult<IEnumerable<RezervacijaLetova>>> GetRezervacijeLetovaZaOdredjenog(string email)
        {


            List<RezervacijaLetova> rezervacija = _context.RezervacijeLetova.ToList();

            if (rezervacija == null)
            {
                rezervacija = new List<RezervacijaLetova>();
            }

            foreach (RezervacijaLetova item in rezervacija.ToList())
            {
                if (item.IdKlijenta != email)
                {
                    rezervacija.Remove(item);
                }
            }

            foreach (RezervacijaLetova item in rezervacija.ToList())
            {
                if (DateTime.Now < item.KrajnjiDatum)
                {
                    item.Zavrseno = true;
                }
            }

            return rezervacija;

        }

        [HttpDelete]
        [Route("DeleteRezervacijaLetova/{id}")]
        public async Task<ActionResult<RezervacijaLetova>> DeleteRezervacijaLetova(int id)
        {
            var rezervacija = await _context.RezervacijeLetova.FindAsync(id);
            if (rezervacija == null)
            {
                return NotFound();
            }

            _context.RezervacijeLetova.Remove(rezervacija);
            await _context.SaveChangesAsync();

            return rezervacija;
        }

        private bool RezervacijaLetovaExists(int id)
        {
            return _context.RezervacijeLetova.Any(e => e.Id == id);
        }

        [HttpPost]
        [Route("AddRezervacijaLetova")]
        public async Task<ActionResult<RezervacijaLetova>> AddRezervacijaLetova(RezervacijaLetova rezervacija)
        {
            rezervacija.Cena = servis.UkupnaCena(rezervacija);
            bool dozvola = servis.DodajDatumeLetu(rezervacija);

            if (dozvola)
            {
                _context.RezervacijeLetova.Add(rezervacija);

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (Exception e)
                {

                }

                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [Route("UpdateRezervacijaLetova")]
        public async Task<IActionResult> UpdateRezervacijaLetova(RezervacijaLetova rezervacija)
        {
            _context.Entry(rezervacija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RezervacijaLetovaExists(rezervacija.Id))
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


        [HttpPost]
        [Route("Oceni")]
        public async Task<ActionResult> Oceni(Ocena oceni)
        {
            RezervacijaLetova rezervacija = _context.RezervacijeLetova.Find(oceni.IdRezervacije);

            rezervacija.OcenaZaKomapaniju = oceni.OcenaKompanije;
            rezervacija.OcenaZaLet = oceni.OcenaVozAvio;

            _context.Entry(rezervacija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                return NoContent();
            }

            return Ok();
        }
    }
}
