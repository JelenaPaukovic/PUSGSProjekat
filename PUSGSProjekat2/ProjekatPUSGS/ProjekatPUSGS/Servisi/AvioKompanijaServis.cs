using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjekatPUSGS.Data;
using ProjekatPUSGS.Models;

namespace ProjekatPUSGS.Servisi
{
    public class AvioKompanijaServis
    {
        private readonly AuthenticationContext _context;

        public AvioKompanijaServis(AuthenticationContext context)
        {
            _context = context;

        }

        public bool DaLiMozeDaSeOdobri(int idAvioKompanije)
        {
            bool temp = true;
            Aviokompanija servis = _context.Kompanije.Find(idAvioKompanije);

            if (servis.CenaPrviDan == 0 || servis.CenaSledeciDan == 0)
            {
                temp = false;

            }
            return temp;
        }
    }
}
