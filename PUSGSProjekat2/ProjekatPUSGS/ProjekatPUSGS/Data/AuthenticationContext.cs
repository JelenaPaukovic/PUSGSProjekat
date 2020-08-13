using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProjekatPUSGS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjekatPUSGS.Data
{
    public class AuthenticationContext : IdentityDbContext
    {
        public AuthenticationContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Korisnik> ApplicationUsers { get; set; }
        public DbSet<RentacarServis> Servisi { get; set; }
        public DbSet<Vozilo> Vozila { get; set; }
        public DbSet<Korisnik> Korisnici { get; set; }
        public DbSet<Aviokompanija> Kompanije { get; set; }
        public DbSet<Letovi> Let { get; set; }
    }
}
