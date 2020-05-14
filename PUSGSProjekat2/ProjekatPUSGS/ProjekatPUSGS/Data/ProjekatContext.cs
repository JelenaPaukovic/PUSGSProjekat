using Microsoft.EntityFrameworkCore;
using ProjekatPUSGS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjekatPUSGS.Data
{
    public class ProjekatContext : DbContext
    {
        public ProjekatContext(DbContextOptions<ProjekatContext> options)
            : base(options)
        {
        }

        public DbSet<RentacarServis> Servisi { get; set; }
        public DbSet<Vozilo> Vozila { get; set; }
        public DbSet<Korisnik> Korisnici { get; set; }
    }
}

