using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace ProjekatPUSGS.Models
{
    public class Aviokompanija
    {
        [Key]
        public int IdAvio { get; set; }
      
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string PromotivniOpis { get; set; }
        public string Destinacije { get; set; }
        public string Letovi { get; set;}
        public string SpisakKarataSaPopustom { get; set; }
        public string KonfSegmenataIMesta { get; set; }
        public string CenovnikIInfoOPrtljagu { get; set; }
        
    }
}
