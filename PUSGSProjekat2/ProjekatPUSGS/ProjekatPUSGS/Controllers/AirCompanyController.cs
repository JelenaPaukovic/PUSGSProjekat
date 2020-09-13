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
    public class AirCompanyController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private AirCompanyServis servis;

        public AirCompanyController(AuthenticationContext context)
        {
            _context = context;
            servis = new AirCompanyServis(context);
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AirCompany>>> GetKomapnije()
        {
            List<AirCompany> servisi = _context.AvioKompanije.ToList();
            foreach (AirCompany item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaAvio(item.Id);
            }
            return servisi;
            //return await _context.Kompanije.ToListAsync();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AirCompany>> GetAviokompanija(int id)
        {
            var aviokompanija = await _context.AvioKompanije.FindAsync(id);

            if (aviokompanija == null)
            {
                return NotFound();
            }

            return aviokompanija;
        }
        // PUT: api/Books/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [Route("UpdateAviokompanija")]
        public async Task<IActionResult> UpdateAviokompanija(AirCompany aviokompanija)
        {
            _context.Entry(aviokompanija).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AirCompanyExists(aviokompanija.Id))
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
        [Route("AddAviokompanija")]
        public async Task<ActionResult<AirCompany>> AddAviokompanija(AirCompany aviokompanija)
        {

            _context.AvioKompanije.Add(aviokompanija);

            await _context.SaveChangesAsync();

            var result = _context.Entry(aviokompanija).Entity;

            return Ok(result);

            // return CreatedAtAction("GetAviokompanija", new { id = aviokompanija.Id }, aviokompanija);
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("DeleteAviokompanija/{id}")]
        public async Task<ActionResult<AirCompany>> DeleteAviokompanija(int id)
        {
            var aviokompanije = await _context.AvioKompanije.FindAsync(id);
            if (aviokompanije == null)
            {
                return NotFound();
            }

            _context.AvioKompanije.Remove(aviokompanije);
            await _context.SaveChangesAsync();

            return aviokompanije;
        }


        [HttpGet]
        [Route("GetAvioKompanijaZaAdmina/{id}")]
        public async Task<ActionResult<IEnumerable<AirCompany>>> GetAvioKompanijaZaAdmina(string id)
        {
            List<AirCompany> servisi = _context.AvioKompanije.ToList();

            foreach (AirCompany item in servisi.ToList())
            {
                if (item.Admin != id)
                {
                    servisi.Remove(item);
                }
            }

            return servisi;
        }
        [HttpGet]
        [Route("GetAviokompanijaOdobreno")]
        public async Task<ActionResult<IEnumerable<AirCompany>>> GetAviokompanijaOdobreno()
        {
            List<AirCompany> servisi = _context.AvioKompanije.ToList();

            foreach (AirCompany item in servisi.ToList())
            {
                if (item.Odobreno == false)
                {
                    servisi.Remove(item);
                }
            }

            foreach (AirCompany item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaAvio(item.Id);
            }

            return servisi;
        }
        [HttpGet]
        [Route("OdobriAvio/{id}")]
        public async Task<ActionResult<AirCompany>> OdobriAvio(int id)
        {
            var servisi = await _context.AvioKompanije.FindAsync(id);
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
        private bool AirCompanyExists(int id)
        {
            return _context.AvioKompanije.Any(e => e.Id == id);
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
        public async Task<ActionResult<double>> Prihodi(PrihodiZaPeriod p)
        {
            return servis.OdrediPrihodeZaPeriod(p);
        }
    }
}
