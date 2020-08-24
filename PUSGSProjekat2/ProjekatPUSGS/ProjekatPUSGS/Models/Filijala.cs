﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjekatPUSGS.Models
{
    public class Filijala
    {
        [Key]
        public int Id { get; set; }

        public string Ulica { get; set; }

        public int Broj { get; set; }

        public string Mesto { get; set; }

        public int ServisID { get; set; }

    }
}