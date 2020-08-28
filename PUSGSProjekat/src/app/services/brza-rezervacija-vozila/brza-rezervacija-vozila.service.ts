import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BrzaRezervacijaVozila } from '../../entities/brza-rezervacija-vozila/brza-rezervacija-vozila';

@Injectable({
  providedIn: 'root'
})
export class BrzaRezervacijaVozilaService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44330/api';

  dodajBrzuRez(rez:BrzaRezervacijaVozila)
  {
    var body = {
      IdRentacar : rez.idRentacar,
      IdVozila : rez.idVozila,
      Popust : rez.popust,
      PocetniDatum : rez.pocetniDatum,
      KrajnjiDatum : rez.krajnjiDatum,
      Id : 0,
      NovaCena : 0,
      PocetnaCena : 0,
      Zavrseno : false,
      IdKlijenta : ''
    };

    console.log(body);
    return this.http.post(this.BaseURI + '/BrzaRezervacijaVozila/AddBrzaRezervacijaVozila/', body);
  }

  ucitajSveBrzeRez()
  {
    var array = this.http.get<BrzaRezervacijaVozila[]>(this.BaseURI + '/BrzaRezervacijaVozila');

    
    return array;

  }

  getBrzaRezZaRent(id:Number)
  {
    return this.http.get(this.BaseURI + '/BrzaRezervacijaVozila/GetBrzaRezervacijaVozilaZaRent/' + id);
  }

  rezervisiVoziloBrzo(rezervacija: BrzaRezervacijaVozila)
  {
    var body = {
      IdRentACar : rezervacija.idRentacar,
      IdVozila : rezervacija.idVozila,
      IdKlijenta : rezervacija.idKlijenta,
      Cena : rezervacija.novaCena,
      PocetniDatum : rezervacija.pocetniDatum,
      KrajnjiDatum : rezervacija.krajnjiDatum,
     // Vozilo: rezervacija.vozilo
    };
    
    return this.http.post(this.BaseURI + '/BrzaRezervacijaVozila/Rezervisi/', body);
  }

}
