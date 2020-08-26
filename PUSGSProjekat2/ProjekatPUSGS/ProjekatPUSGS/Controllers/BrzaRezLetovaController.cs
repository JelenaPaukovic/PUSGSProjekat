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
    public class BrzaRezLetovaController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private RezervacijaLetovaServis servis;

        public BrzaRezLetovaController(AuthenticationContext context)
        {
            _context = context;
            servis = new RezervacijaLetovaServis(_context);

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BrzaRezervacijaLetova>>> GetBrzaRezervacijaLetova()
        {
            return await _context.BrzeRezervacijeLetova.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BrzaRezervacijaLetova>> GetBrzaRezervacijaLetova(int id)
        {
            var rezervacija = await _context.BrzeRezervacijeLetova.FindAsync(id);

            if(rezervacija == null)
            {
                return NotFound();

            }
            return rezervacija;
        }

        [HttpGet]
        [Route("GetBrzaRezervacijaLetovaZaRent/{id}")]
        public async Task<ActionResult<IEnumerable<BrzaRezervacijaLetova>>> GetBrzaRezervacijaLetovaZaRent(int id)
        {
            List<BrzaRezervacijaLetova> lista = _context.BrzeRezervacijeLetova.Where(x => x.IdAvioKompanije == id).ToList();

            if (lista == null)
            {
                return NotFound();
            }

            return lista;
        }

        [HttpDelete]
        [Route("DeleteBrzaRezervacijaLetova/{id}")]
        public async Task<ActionResult<BrzaRezervacijaLetova>> DeleteBrzaRezervacijaLetova(int id)
        {
            var rezervacija = await _context.BrzeRezervacijeLetova.FindAsync(id);
            if (rezervacija == null)
            {
                return NotFound();
            }

            _context.BrzeRezervacijeLetova.Remove(rezervacija);
            await _context.SaveChangesAsync();

            return rezervacija;
        }

        [HttpPost]
        [Route("Rezervisi")]
        public async Task<ActionResult<BrzaRezervacijaLetova>> Rezervisi(BrzaRezervacijaLetova rezervacija)
        {
            BrzaRezervacijaLetova brza = _context.BrzeRezervacijeLetova.Where(x => x.IdLeta == rezervacija.IdLeta).FirstOrDefault();

            if (rezervacija.RedVerzija.Length != brza.RedVerzija.Length)
            {
                return BadRequest();
            }

            for (int i = 0; i < brza.RedVerzija.Length; i++)
            {
                if (brza.RedVerzija[i] != rezervacija.RedVerzija[i])
                {
                    return BadRequest();
                }
            }

            RezervacijaLetova rez = new RezervacijaLetova();
            rez.IdKlijenta = rezervacija.IdKlijenta;
            rez.IdAvioKompanije = rezervacija.IdAvioKompanije;
            rez.IdLeta = rezervacija.IdLeta;
            rez.Cena = rezervacija.NovaCena;
            rez.KrajnjiDatum = rezervacija.KrajnjiDatum;
            rez.PocetniDatum = rezervacija.PocetniDatum;
            rez.Zavrseno = false;

            rezervacija.Zavrseno = true;
            _context.Entry(rezervacija).State = EntityState.Modified;
            _context.RezervacijeLetova.Add(rez);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {

            }
            return Ok();
        }

        private bool BrzaRezervacijaLetovaExists(int id)
        {
            return _context.BrzeRezervacijeLetova.Any(e => e.IdLeta == id);
        }

        [HttpPost]
        [Route("AddBrzaRezervacijaLetova")]
        public async Task<ActionResult<BrzaRezervacijaLetova>> AddBrzaRezervacijaLetova(BrzaRezervacijaLetova rezervacija)
        {
            Aviokompanija rentservis = _context.Kompanije.Find(rezervacija.IdAvioKompanije);

            //rezervacija.PocetnaCena = servis.ukupnaCena(rezervacija);
            //rezervacija.NovaCena = rezervacija.PocetnaCena - rezervacija.PocetnaCena * rezervacija.Popust / 100;

            _context.BrzeRezervacijeLetova.Add(rezervacija);

            // servis.dodajDatumeDestinaciji(rezervacija);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBrzaRezervacijaVozila", new { id = rezervacija.IdRez }, rezervacija);
        }

        //[Route("UpdateBrzaRezervacijaVozila")]
        //public async Task<IActionResult> UpdateBrzaRezervacijaVozila(BrzaRezervacijaVozila rezervacija)
        //{
        //    _context.Entry(rezervacija).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!BrzaRezervacijaDestinacijaExists(rezervacija.Id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}
    }
    public double UkupnaCena(BrzaRezervacijaLetova rezervacija)
    {
        DateTime pocetni = rezervacija.PocetniDatum;
        DateTime krajnji = rezervacija.KrajnjiDatum;

        
        // Aviokompanija avioKomp = _context.Aviokomapanija.Find(rezervacija.IdAvioKompanije);

        //double ukupnaCena = avioKomp.CenaPrviDan;

        //if (pocetni != krajnji)
        //{
        //    TimeSpan ts = new TimeSpan(1, 0, 0, 0);

        //    while (pocetni != krajnji)
        //    {
        //        pocetni += ts;
        //        ukupnaCena += avioKomp.CenaSledeciDan;
        //    }
        //}

        //return ukupnaCena;
    }
}
