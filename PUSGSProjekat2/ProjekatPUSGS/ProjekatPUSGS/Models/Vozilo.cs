using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjekatPUSGS.Models
{
    public class Vozilo
    {
        [Key]
        public int IdVozilo { get; set; }
        public string Naziv { get; set; }
        public string Marka { get; set; }
        public string Model { get; set; }
        public string GodinaProizvodnje { get; set; }
        public int BrojSedista { get; set; }
        public string TipVozila { get; set; }
    }
}
