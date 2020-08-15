using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ProjekatPUSGS.Models
{
    public class RezervacijaLetova
    {
        [Key]
        public int Id { get; set; }

        public int IdAvioKompanije { get; set; }

        public int IdLeta { get; set; }

        public double Cena { get; set; }

        public bool Zavrseno { get; set; }

        public string IdKlijenta { get; set; }

        public DateTime PocetniDatum { get; set; }

        public DateTime KrajnjiDatum { get; set; }

        public int OcenaZaKomapaniju { get; set; }
        public int OcenaZaLet { get; set; }

        [NotMapped]
        public List<DateTime> ZauzetiDatumi { get; set; }

        public string DatumiZauzeti { get; set; }

        [NotMapped]
        public Letovi Destinacija { get; set; }


        public void PretvaranjeiUJson()
        {
            string output = JsonConvert.SerializeObject(ZauzetiDatumi);
            DatumiZauzeti = output;
        }

        public void PretvaranjeUListu()
        {
            if (DatumiZauzeti != null)
            {
                List<DateTime> deserializedProduct = JsonConvert.DeserializeObject<List<DateTime>>(DatumiZauzeti);
                ZauzetiDatumi = deserializedProduct;
            }
        }
    }
}
