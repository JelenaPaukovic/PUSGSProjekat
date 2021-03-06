﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Destinacija
    {
        [Key]
        public int Id { get; set; }

        public string NazivDestinacije { get; set; }

        public string datumVremeSletanja { get; set; }

        public string datumVremePoletanja { get; set; }

        public string vremePutovanja { get; set; }

        public string duzinaPutovanja { get; set; }

        public int brojPresedanja { get; set; }

        public string lokacijaPresedanja { get; set; }

        public string cenaKarte { get; set; }

        public int AirCompanyID { get; set; }

        [NotMapped]
        public List<DateTime> ZauzetiDatumi { get; set; }

        public string ZauzetiDatumiString { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }

        public void PretvoriUJson()
        {
            string output = JsonConvert.SerializeObject(ZauzetiDatumi);
            ZauzetiDatumiString = output;
        }

        public void PretvoriUListu()
        {
            if (ZauzetiDatumiString != null)
            {
                List<DateTime> deserializedProduct = JsonConvert.DeserializeObject<List<DateTime>>(ZauzetiDatumiString);
                ZauzetiDatumi = deserializedProduct;
            }
            else
            {
                ZauzetiDatumi = new List<DateTime>();
            }
        }
    }
}
