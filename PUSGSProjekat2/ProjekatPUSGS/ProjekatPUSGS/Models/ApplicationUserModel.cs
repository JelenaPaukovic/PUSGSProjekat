using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjekatPUSGS.Models
{
    public class ApplicationUserModel
    {
        public string Username { get; set; }

        public string Ime { get; set; }
        public string Prezime { get; set; }

        public string Grad { get; set; }
        public string BrojTelefona { get; set; }

        public string EmailAdresa { get; set; }
        public string Lozinka { get; set; }
        public string UlogaKorisnika { get; set; }
        
    }
}
