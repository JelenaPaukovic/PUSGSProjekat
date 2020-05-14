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
        public string CenovnikUsluga { get; set; }
        public string SpisakVozila { get; set; }
        public string Filijale { get; set; }

    }
}
