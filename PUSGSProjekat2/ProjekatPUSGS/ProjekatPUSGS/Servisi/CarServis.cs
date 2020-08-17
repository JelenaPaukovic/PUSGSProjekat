using Microsoft.EntityFrameworkCore;
using ProjekatPUSGS.Data;
using ProjekatPUSGS.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace ProjekatPUSGS.Servisi
{
    public class CarServis
    {
        private readonly AuthenticationContext _context;

        public CarServis(AuthenticationContext context)
        {
            _context = context;
        }

        public bool DaLiMozeDaSeOdobri(int idRentACar)
        {
            bool temp = true;

            RentacarServis servis = _context.Servisi.Find(idRentACar);

            if (servis.cenaPrviDan == 0 || servis.cenaSledeciDan == 0)
            {
                temp = false;
            }

            return temp;
        }

        public void potvrdi(Korisnik k)
        {
            _context.Entry(k).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public List<int> BrojNaMesecnomNivou(int rentACarId)
        {
            List<RezervacijaVozila> lista = _context.RezervacijeVozila.ToList();

            foreach (RezervacijaVozila item in lista.ToList())
            {
                if (item.IdServisa != rentACarId)
                {
                    lista.Remove(item);
                }
            }

            List<int> rezultat = new List<int>();

            for (int i = 0; i < 12; i++)
            {
                rezultat.Add(0);
            }

            foreach (RezervacijaVozila item in lista)
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

        public List<int> BrojNaNedeljnomNivou(int rentACarId)
        {
            List<RezervacijaVozila> lista = _context.RezervacijeVozila.ToList();

            foreach (RezervacijaVozila item in lista.ToList())
            {
                if (item.IdServisa != rentACarId)
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


            foreach (RezervacijaVozila item in lista)
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


        public List<int> BrojNaDnevnomNivou(int rentACarId)
        {
            List<RezervacijaVozila> lista = _context.RezervacijeVozila.ToList();

            foreach (RezervacijaVozila item in lista.ToList())
            {
                if (item.IdServisa != rentACarId)
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


            foreach (RezervacijaVozila item in lista)
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

        public double ProsecnaOcenaZaRentACar(int rentACarId)
        {
            double rezultat = 0;
            double zbirOcena = 0;
            double brojOcena = 0;

            List<RezervacijaVozila> lista = _context.RezervacijeVozila.ToList();

            foreach (RezervacijaVozila item in lista.ToList())
            {
                if (item.IdServisa != rentACarId)
                {
                    lista.Remove(item);
                }
            }

            foreach (RezervacijaVozila item in lista)
            {
                if (item.OcenaZaServis != 0)
                {
                    zbirOcena += item.OcenaZaServis;
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

        public double ProsecnaOcenaZaVozilo(int voziloId)
        {
            double rezultat = 0;
            double zbirOcena = 0;
            double brojOcena = 0;

            List<RezervacijaVozila> lista = _context.RezervacijeVozila.ToList();

            foreach (RezervacijaVozila item in lista.ToList())
            {
                if (item.IdVozila != voziloId)
                {
                    lista.Remove(item);
                }
            }

            foreach (RezervacijaVozila item in lista)
            {
                if (item.OcenaZaVozilo != 0)
                {
                    zbirOcena += item.OcenaZaVozilo;
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

        public double OdrediPrihodeZaPeriod(Prihodi p)
        {
            List<RezervacijaVozila> lista = _context.RezervacijeVozila.ToList();

            foreach (RezervacijaVozila item in lista.ToList())
            {
                if (item.IdServisa != p.IdServisa)
                {
                    lista.Remove(item);
                }
            }

            double ukupniPrihodi = 0;

            foreach (RezervacijaVozila item in lista)
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
    }
}
