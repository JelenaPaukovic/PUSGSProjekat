﻿using System;
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
    public class AviokompanijaController : ControllerBase
    {
        private readonly AuthenticationContext _context;
        private AvioKompanijaServis servis;

        public AviokompanijaController(AuthenticationContext context)
        {
            _context = context;
            servis = new AvioKompanijaServis(context);
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aviokompanija>>> GetKomapnije()
        {
            List<Aviokompanija> servisi = _context.Kompanije.ToList();
            foreach (Aviokompanija item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaAvio(item.IdAvio);
            }
            return servisi;
            //return await _context.Kompanije.ToListAsync();
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
            kompanije.Ocena = servis.ProsecnaOcenaZaAvio(id);

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

        [HttpGet]
        [Route("GetAvioKompanijaZaAdmina/{id}")]
        public async Task<ActionResult<IEnumerable<Aviokompanija>>> GetAvioKompanijaZaAdmina(string id)
        {
            List<Aviokompanija> servisi = _context.Kompanije.ToList();

            foreach (Aviokompanija item in servisi.ToList())
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
        public async Task<ActionResult<IEnumerable<Aviokompanija>>> GetAviokompanijaOdobreno()
        {
            List<Aviokompanija> servisi = _context.Kompanije.ToList();

            foreach (Aviokompanija item in servisi.ToList())
            {
                if (item.Odobreno == false)
                {
                    servisi.Remove(item);
                }
            }

            foreach (Aviokompanija item in servisi.ToList())
            {
                item.Ocena = servis.ProsecnaOcenaZaAvio(item.IdAvio);
            }

            return servisi;
        }
        [HttpGet]
        [Route("OdobriAvio/{id}")]
        public async Task<ActionResult<Aviokompanija>> OdobriAvio(int id)
        {
            var servisi = await _context.Kompanije.FindAsync(id);
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
        private bool KompanijaExists(int id)
        {
            return _context.Kompanije.Any(e => e.IdAvio == id);
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
