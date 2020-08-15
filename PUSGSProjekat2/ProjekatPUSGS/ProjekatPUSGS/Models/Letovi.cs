using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;


namespace ProjekatPUSGS.Models
{
    public class Letovi
    {
        [Key]
        public int IdLet { get; set; }
        public string NazivDestinacije { get; set; }
        public string  DatumIVremePoletanja { get; set; }
        public string DatumIVremeSletanja { get; set; }
        public string VremePutovanja { get; set; }
        public string DuzinaPutovanja { get; set; }
        public string BrojPresedanja { get; set; }
        public string LokacijaPresedanja { get; set; }
        public int CenaKarte { get; set; }

        public int IdAvioKompanije { get; set; }

        [NotMapped]
        public List<DateTime> ZauzetiDatumi { get; set; }
        public string DatumiZazuzeti { get; set; }

        [Timestamp]
        public byte[] RedVerzija { get; set; }

        public void PretvaranjeUJson()
        {
            string output = JsonConvert.SerializeObject(ZauzetiDatumi);
            DatumiZazuzeti = output;

        }

        public void PretvaranjeUListu()
        {
            if (DatumiZazuzeti != null)
            {
                List<DateTime> deserializeProduct = JsonConvert.DeserializeObject<List<DateTime>>(DatumiZazuzeti);
                ZauzetiDatumi = deserializeProduct;

            }
            else
            {
                ZauzetiDatumi = new List<DateTime>();
            }
        }

    }
}
