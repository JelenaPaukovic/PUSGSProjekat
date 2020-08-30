using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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

        public double ProsecnaOcenaZaAvio(int avioId)
        {
            double rezultat = 0;
            double zbirOcena = 0;
            double brojOcena = 0;

            List<RezervacijaLetova> lista = _context.RezervacijeLetova.ToList();

            foreach (RezervacijaLetova item in lista.ToList())
            {
                if (item.IdAvioKompanije != avioId)
                {
                    lista.Remove(item);
                }
            }

            foreach (RezervacijaLetova item in lista)
            {
                if (item.OcenaZaKomapaniju != 0)
                {
                    zbirOcena += item.OcenaZaKomapaniju;
                    brojOcena++;
                }
            }

            rezultat = zbirOcena / brojOcena;

            if (brojOcena == 0)
            {
                return 0;
            }

            rezultat = Math.Round(rezultat, 2);

            return rezultat;

        }
        public double ProsecnaOcenaZaLet(int letId)
        {
            double rezultat = 0;
            double zbirOcena = 0;
            double brojOcena = 0;

            List<RezervacijaLetova> lista = _context.RezervacijeLetova.ToList();

            foreach (RezervacijaLetova item in lista.ToList())
            {
                if (item.IdLeta != letId)
                {
                    lista.Remove(item);
                }
            }

            foreach (RezervacijaLetova item in lista)
            {
                if (item.OcenaZaLet != 0)
                {
                    zbirOcena += item.OcenaZaLet;
                    brojOcena++;
                }
            }

            rezultat = zbirOcena / brojOcena;

            if (brojOcena == 0)
            {
                return 0;
            }


            rezultat = Math.Round(rezultat, 2);

            return rezultat;

        }
        public List<int> BrojNaMesecnomNivou(int avioId)
        {
            List<RezervacijaLetova> lista = _context.RezervacijeLetova.ToList();

            foreach (RezervacijaLetova item in lista.ToList())
            {
                if (item.IdAvioKompanije != avioId)
                {
                    lista.Remove(item);
                }
            }

            List<int> rezultat = new List<int>();

            for (int i = 0; i < 12; i++)
            {
                rezultat.Add(0);
            }

            foreach (RezervacijaLetova item in lista)
            {
                DateTime pocetni = item.PocetniDatum;
                DateTime krajnji = item.KrajnjiDatum;

                if (pocetni != krajnji)
                {
                    TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                    while (pocetni != krajnji)
                    {
                        rezultat[pocetni.Month - 1]++;
                        pocetni += ts;
                    }
                }

                rezultat[krajnji.Month - 1]++;
            }

            return rezultat;
        }

        public List<int> BrojNaNedeljnomNivou(int avioId)
        {
            List<RezervacijaLetova> lista = _context.RezervacijeLetova.ToList();

            foreach (RezervacijaLetova item in lista.ToList())
            {
                if (item.IdAvioKompanije != avioId)
                {
                    lista.Remove(item);
                }
            }

            List<int> rezultat = new List<int>();

            for (int i = 0; i < 53; i++)
            {
                rezultat.Add(0);
            }

            var currentCulture = CultureInfo.CurrentCulture;


            foreach (RezervacijaLetova item in lista)
            {
                DateTime pocetni = item.PocetniDatum;
                DateTime krajnji = item.KrajnjiDatum;

                if (pocetni != krajnji)
                {
                    TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                    while (pocetni != krajnji)
                    {
                        int weekNo = currentCulture.Calendar.GetWeekOfYear(pocetni,
                                                                            currentCulture.DateTimeFormat.CalendarWeekRule,
                                                                            currentCulture.DateTimeFormat.FirstDayOfWeek);
                        rezultat[weekNo - 1]++;
                        pocetni += ts;
                    }
                }

                int n = currentCulture.Calendar.GetWeekOfYear(krajnji,
                                                              currentCulture.DateTimeFormat.CalendarWeekRule,
                                                               currentCulture.DateTimeFormat.FirstDayOfWeek);
                rezultat[n - 1]++;
            }

            return rezultat;
        }


        public List<int> BrojNaDnevnomNivou(int avioId)
        {
            List<RezervacijaLetova> lista = _context.RezervacijeLetova.ToList();

            foreach (RezervacijaLetova item in lista.ToList())
            {
                if (item.IdAvioKompanije != avioId)
                {
                    lista.Remove(item);
                }
            }

            List<int> rezultat = new List<int>();

            for (int i = 0; i < 7; i++)
            {
                rezultat.Add(0);
            }

            var currentCulture = CultureInfo.CurrentCulture;


            foreach (RezervacijaLetova item in lista)
            {
                DateTime pocetni = item.PocetniDatum;
                DateTime krajnji = item.KrajnjiDatum;

                int t;

                if (pocetni != krajnji)
                {
                    TimeSpan ts = new TimeSpan(1, 0, 0, 0);

                    while (pocetni != krajnji)
                    {
                        t = (int)pocetni.DayOfWeek - 1;
                        if (t == -1)
                        {
                            t = 6;
                        }
                        rezultat[t]++;
                        pocetni += ts;
                    }
                }

                t = (int)krajnji.DayOfWeek - 1;
                if (t == -1)
                {
                    t = 6;
                }
                rezultat[t]++;
            }

            return rezultat;
        }

        public double OdrediPrihodeZaPeriod(Prihodi p)
        {
            List<RezervacijaLetova> lista = _context.RezervacijeLetova.ToList();

            foreach (RezervacijaLetova item in lista.ToList())
            {
                if (item.IdAvioKompanije != p.IdServisa)
                {
                    lista.Remove(item);
                }
            }

            double ukupniPrihodi = 0;

            foreach (RezervacijaLetova item in lista)
            {
                if (p.PocetniDatum >= item.PocetniDatum && p.PocetniDatum <= item.KrajnjiDatum)
                {
                    ukupniPrihodi += item.Cena;
                }
                else if (p.KrajnjiDatum >= item.PocetniDatum && p.KrajnjiDatum <= item.KrajnjiDatum)
                {
                    ukupniPrihodi += item.Cena;
                }
            }

            return ukupniPrihodi;
        }
        public void potvrdi(Korisnik k)
        {
            _context.Entry(k).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }

}
