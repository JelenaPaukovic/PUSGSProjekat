import { Injectable } from '@angular/core';
import {Letovi} from 'src/app/entities/letovi/letovi';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LetoviService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44330/api';

  loadLetovi() {
    console.log('Učitavanje destinacija...');
    return this.mockedLetovi();
  }

  mockedLetovi(): Array<Letovi> {
    let allLetovi = new Array<Letovi>();

    const letovi1 = new Letovi(1, 'Jerusalim','21.9.2020 13:25', '11.9.2020 10:10', '7h', '2861km', 1, 'Istanbul', '40000.00rsd');
    const letovi2 = new Letovi(2, 'Ljubljana' ,'4.7.2020 16:45', '30.6.2020 20:20', '4h', '531km', 0, '-', '33000.00rsd');
    const letovi3 = new Letovi(3, 'Sofija', '16.5.2020 6:55', '11.5.2020 17:05', '3h', '394km', 0, '-', '19000.00rsd');
    const letovi4 = new Letovi(4, 'Pariz', '26.12.2020 3:20', '20.12.2020 6:30', '6h', '1857km', 1, 'Bratislava', '36000.00rsd')

    allLetovi.push(letovi1);
    allLetovi.push(letovi2);
    allLetovi.push(letovi3);
    allLetovi.push(letovi4);

    return allLetovi;
  }

  dodajLet(item:Letovi) {
    var body = {
      NazivDestinacije : item.nazivDestinacije,
      DatumVremePoletanja : item.datumIVremePoletanja,
      DatumVremeSletanja : item.datumIVremeSletanja,
      VremePutovanja : item.vremePutovanja,
      DuzinaPutovanja : item.duzinaPutovanja,
      brojPresedanja : item.brojPresedanja,
      lokacijaPresedanja : item.lokacijaPresedanja,
      CenaKarte : item.cenaKarte,
      IdAviokompanije : item.idAvioKompanije
    };

    console.log(body);
    return this.http.post(this.BaseURI + '/Letovi/AddLetovi', body);
  }

  ucitajLetovi(){
    let letoviNiz = new Array<Letovi>();
    var array = this.http.get<Letovi[]>(this.BaseURI + '/Letovi');
    return array;
  }

  izmeniLetovi(letovi: Letovi){
    return this.http.post(this.BaseURI + '/Letovi/UpdateLetovi/', letovi);

  }

  obrisiLetovi(id:Number){
    return this.http.delete(this.BaseURI + '/Letovi/DeleteLetovi/' + id);
  }

  ucitajLetoviZaAviokompanijuOdredjenu(id:Number){
    return this.http.get<Letovi>(this.BaseURI + '/GetLetoviZaOdredjenuAviokompaniju/' + id);
  }
}
