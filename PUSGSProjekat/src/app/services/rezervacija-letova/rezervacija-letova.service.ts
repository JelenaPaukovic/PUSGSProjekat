import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RezervacijaLetova} from 'src/app/entities/rezervacija-letova/rezervacija-letova';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaLetovaService {

  constructor(private fb : FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  rezervisiLet(rezervacija: RezervacijaLetova)
  {
    var body = {
      IdAvioKompanije : rezervacija.idAvioKompanije,
      Id : rezervacija.id,
      IdKlijenta : rezervacija.idKlijenta,
      Cena : rezervacija.cena,
      PocetniDatum : rezervacija.pocetniDatum,
      KrajnjiDatum : rezervacija.krajnjiDatum,
      Destinacija: rezervacija.destinacija
    };

    console.log(body);
    
    return this.http.post(this.BaseURI + '/RezervacijaLetova/AddRezervacijaLetova/', body);
  }

  getRezervacijeZaOdredjenog(email:string)
  {
    return this.http.get<RezervacijaLetova>(this.BaseURI + '/RezervacijaLetova/GetRezervacijaLetovaZaOdredjenog/'+email);
  }

  oceni(id:number,ocenaKomp:number,ocenaAvio:number)
  {
    var body={
       IdRezervacije:id,
       OcenaKompanja:ocenaKomp,
       OcenaVozAvio:ocenaAvio,
    };

    return this.http.post(this.BaseURI + '/RezervacijaLetova/Oceni/', body);
  }


}
