using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ProjekatPUSGS.Models
{
    public class BrzaRezervacijaLetova
    {
        [Key]
        public int IdRez { get; set; }
        public int IdAvioKompanije { get; set; }
        public int IdLeta { get; set; }
        public double NovaCena { get; set; }
        public double PocetnaCena { get; set; }
        public double Popust { get; set; }
        public bool Zavrseno { get; set; }
        public string IdKlijenta { get; set; }
        public DateTime PocetniDatum { get; set;}
        public DateTime KrajnjiDatum { get; set; }

        [Timestamp]
        public byte[] RedVerzija { get; set; }

    }
}
