using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjekatPUSGS.Models
{

    public enum Tip
    {
        NeregistrovaniKorisnik,
        RegistrovaniKorisnik,
        AdminAvio,
        AdminRentacar,


        Admin
    }


    public class Korisnik : IdentityUser
    {

        //public int IdKorisnik { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        //public string EmailAdresa { get; set; }
        // public string Lozinka { get; set; }
        public string Grad { get; set; }
        public string Telefon { get; set; }

        public Tip UlogaKorisnika { get; set; }
        public bool IzmenjenaLozinka { get; set; }

    }
}
