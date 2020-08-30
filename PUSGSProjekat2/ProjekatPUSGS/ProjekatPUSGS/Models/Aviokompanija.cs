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

        public ICollection<Letovi> Destinacije;
        //public string Destinacije { get; set; }
        public string Letovi { get; set;}
        public string SpisakKarataSaPopustom { get; set; }
        public string KonfSegmenataIMesta { get; set; }
        //public string CenovnikIInfoOPrtljagu { get; set; }
        public string InfoPrtljag { get; set;}
        public string Cenovnik {get; set;}
        public double CenaPrviDan {get;set;}
        public double CenaSledeciDan {get;set;}
        public bool Odobreno {get;set;}
        public string DestinacijePoslovanja {get;set;}
        public string Admin {get;set;}

        public double Ocena { get; set; }


    }
}
