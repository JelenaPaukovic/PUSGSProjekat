using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace ProjekatPUSGS.Models
{
    public class Letovi
    {
        [Key]
        public int IdLet { get; set; }
        public DateTime DatumIVremePoletanja { get; set; }
        public DateTime DatumIVremeSletanja { get; set; }
        public DateTime VremePutovanja { get; set; }
        public DateTime DuzinaPutovanja { get; set; }
        public string BrojILokacijePresedanja { get; set; }
        public int CenaKarte { get; set; }

    }
}
