using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjekatPUSGS.Models
{
    public class RentacarServis
    {
        [Key]
        public int IdServis { get; set; }
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string PromotivniOpis { get; set; }
        public string Admin { get; set; }
        public ICollection<Vozilo> Vozila { get; set; }
        public double cenaPrviDan { get; set; }

        public double cenaSledeciDan { get; set; }

        public bool Odobreno { get; set; }

        public double Ocena { get; set; }
    }
}
