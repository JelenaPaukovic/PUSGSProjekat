import { Injectable } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BrzaRezervacijaLetova} from 'src/app/entities/brza-rezervacija-letova/brza-rezervacija-letova';


@Injectable({
  providedIn: 'root'
})
export class BrzaRezervacijaLetovaService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseUri = 'https://localhost:44330/api';

  dodajBrzuRez(rez:BrzaRezervacijaLetova){
    var body={
      IdAviokompanije: rez.idAvioKompanije,
      IdLeta : rez.idLeta,
      Popust : rez.popust,
      PocetniDatum : rez.pocetniDatum,
      KrajnjiDatum : rez.krajnjiDatum,
      IdRez: 0,
      NovaCena : 0,
      PocetnaCena : 0,
      Zavrseno : false,
      IdKlijenta : ''

    };

    console.log(body);
    return this.http.post(this.BaseUri + '/BrzaRezLetova/AddBrzaRezervacijaLetova/', body);

  }

  ucitajSveBrzeRez(){
    var array = this.http.get<BrzaRezervacijaLetova[]>(this.BaseUri + '/BrzaRezLetova');
    return array;
  }
}
