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
    public class RentacarServisController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private CarServis servis;
        public RentacarServisController(AuthenticationContext context)
        {
            _context = context;
            servis = new CarServis(context);
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentacarServis>>> GetServisi()
        {
            //return await _context.Servisi.ToListAsync();

            List<RentacarServis> servisi = _context.Servisi.ToList();

            foreach (RentacarServis item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaRentACar(item.IdServis);
            }

            return servisi;
        }



        [HttpGet]
        [Route("GetRentACarServisiOdobreni")]
        public async Task<ActionResult<IEnumerable<RentacarServis>>> GetRentACarServisiOdobreni()
        {
            List<RentacarServis> servisi = _context.Servisi.ToList();

            foreach (RentacarServis item in servisi.ToList())
            {
                if (item.Odobreno == false)
                {
                    servisi.Remove(item);
                }
            }

            foreach (RentacarServis item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaRentACar(item.IdServis);
            }

            return servisi;
        }

        [HttpPut]
        [Route("GetRentACarServisPosleAvio")]
        public async Task<ActionResult<RentacarServis>> GetRentACarServisPosleAvio(RezervacijaVozilaPosleAvio rez)
        {
            List<Filijala> filijale = _context.Filijale.ToList();

            foreach (Filijala item in filijale.ToList())
            {
                if (item.Mesto != rez.Lokacija)
                {
                    filijale.Remove(item);
                }
            }

            RentacarServis rent = new RentacarServis();

            if (filijale.Count == 0)
            {
                // nema servisa u tom mestu
                rent = _context.Servisi.FirstOrDefault();
            }
            else
            {
                rent = _context.Servisi.Find(filijale[0].ServisID);
            }

            return rent;
        }

        [HttpGet]
        [Route("GetRentACarServisiZaAdmina/{id}")]
        public async Task<ActionResult<IEnumerable<RentacarServis>>> GetRentACarServisiZaAdmina(string id)
        {
            List<RentacarServis> servisi = _context.Servisi.ToList();

            foreach (RentacarServis item in servisi.ToList())
            {
                if (item.Admin != id)
                {
                    servisi.Remove(item);
                }
            }

            return servisi;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RentacarServis>> GetRentACarServis(int id)
        {
            var serviss = await _context.Servisi.FindAsync(id);

            if (serviss == null)
            {
                return NotFound();
            }

            serviss.Ocena = servis.ProsecnaOcenaZaRentACar(id);

            return serviss;
        }

        [HttpDelete]
        [Route("DeleteRentACarServis/{id}")]
        public async Task<ActionResult<RentacarServis>> DeleteRentACarServis(int id)
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

        [HttpGet]
        [Route("OdobriRentACarServis/{id}")]
        public async Task<ActionResult<RentacarServis>> OdobriRentACarServis(int id)
        {
            var servisi = await _context.Servisi.FindAsync(id);
            if (servisi == null)
            {
                return NotFound();
            }


            if (!servis.DaLiMozeDaSeOdobri(id))
            {
                return NotFound();
            }

            _context.Entry(servisi).State = EntityState.Modified;
            servisi.Odobreno = true;

            await _context.SaveChangesAsync();

            return servisi;
        }

        private bool RentACarServisExists(int id)
        {
            return _context.Servisi.Any(e => e.IdServis == id);
        }

        [HttpPost]
        [Route("AddRentACarServis")]
        public async Task<IActionResult> AddRentACarServis(RentacarServis servis)
        {

            _context.Servisi.Add(servis);

            await _context.SaveChangesAsync();

            var result = _context.Entry(servis).Entity;

            return Ok(result);
        }

        [Route("UpdateRentACarServis")]
        public async Task<IActionResult> UpdateRentACarServis(RentacarServis servis)
        {
            _context.Entry(servis).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentACarServisExists(servis.IdServis))
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

        [HttpPut]
        [Route("PretragaRentACarServis")]
        public List<RentacarServis> PretragaRentACarServis(PretragaServisa pretraga)
        {
            List<RentacarServis> servisi = _context.Servisi.ToList();

            foreach (RentacarServis item in servisi.ToList())
            {
                if (item.Odobreno == false)
                {
                    servisi.Remove(item);
                }
            }

            List<RentacarServis> rezultat = new List<RentacarServis>();

            foreach (RentacarServis item in servisi)
            {
                if (item.Naziv.ToLower().Contains(pretraga.Naziv.ToLower()))
                {
                    rezultat.Add(item);
                }
            }

            foreach (RentacarServis item in rezultat.ToList())
            {
                VoziloController vc = new VoziloController(_context);
                List<Vozilo> vozila = vc.VozilaZaOdredjeniServis(item.IdServis);

                foreach (Vozilo voz in vozila.ToList())
                {
                    voz.PretvoriUListu();

                    bool postoji = false;

                    if (voz.ZauzetiDatumi != null)
                    {
                        foreach (DateTime datum in voz.ZauzetiDatumi)
                        {
                            if (datum >= pretraga.DatumOd && datum <= pretraga.DatumDo)
                            {
                                postoji = true;
                            }
                        }
                    }

                    if (postoji)
                    {
                        vozila.Remove(voz);
                    }
                }

                if (vozila.Count == 0)
                {
                    rezultat.Remove(item);
                }

            }

            return rezultat;
        }

        [HttpGet]
        [Route("GetMesecniIzvestaj/{id}")]
        public async Task<ActionResult<IEnumerable<int>>> GetMesecniIzvestaj(int id)
        {
            return servis.BrojNaMesecnomNivou(id);
        }

        [HttpGet]
        [Route("GetNedeljniIzvestaj/{id}")]
        public async Task<ActionResult<IEnumerable<int>>> GetNedeljniIzvestaj(int id)
        {
            return servis.BrojNaNedeljnomNivou(id);
        }

        [HttpGet]
        [Route("GetDnevniIzvestaj/{id}")]
        public async Task<ActionResult<IEnumerable<int>>> GetDnevniIzvestaj(int id)
        {
            return servis.BrojNaDnevnomNivou(id);
        }

        [HttpPost]
        [Route("Prihodi")]
        public async Task<ActionResult<double>> Prihodi(Prihodi p)
        {
            return servis.OdrediPrihodeZaPeriod(p);
        }
    }
}