using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjekatPUSGS.Data;
using ProjekatPUSGS.Models;
using Microsoft.EntityFrameworkCore;


namespace ProjekatPUSGS.Servisi
{
    public class RezervacijaLetovaServis
    {
        private readonly AuthenticationContext _context;

        public RezervacijaLetovaServis(AuthenticationContext context)
        {
            _context = context;

        }
        public double UkupnaCena(RezervacijaLetova rezervacija)
        {
            DateTime pocetni = rezervacija.PocetniDatum;
            DateTime krajnji = rezervacija.KrajnjiDatum;

            RentacarServis rentAcar = _context.Servisi.Find(rezervacija.IdAvioKompanije);

            double ukupnaCena = rentAcar.cenaPrviDan;

            if (pocetni != krajnji)
            {
                TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                while (pocetni != krajnji)
                {
                    pocetni += ts;
                    ukupnaCena += rentAcar.cenaSledeciDan;

                }

            }
            return ukupnaCena;
        
            public bool DodajDatumeLetu(RezervacijaLetova rezervacija)
            {
                DateTime pocetni = rezervacija.PocetniDatum;
                DateTime krajnji = rezervacija.KrajnjiDatum;

                Letovi letovi = _context.Let.Find(rezervacija.IdLeta);
                if(letovi.RedVerzija.Length != rezervacija.Destinacija.RedVerzija.Length)
                {
                    return false;
                }
                for(int i=0; i<letovi.RedVerzija.Length; i++)
                {
                    if(letovi.RedVerzija[i] != rezervacija.Destinacija.RedVerzija[i])
                    {
                        return false;
                    }
                }

                if(pocetni != krajnji)
                {
                    TimeSpan ts = new TimeSpan(1, 0, 0, 0);
                    letovi.PretvaranjeUListu();

                    while(pocetni != krajnji)
                    {
                        letovi.ZauzetiDatumi.Add(pocetni);
                        pocetni += ts;
                    }
                }

                letovi.PretvaranjeUJson();

                _context.Entry(letovi).State = EntityState.Modified;

                return true;

            }
                
            

                 

        }
    }
}
