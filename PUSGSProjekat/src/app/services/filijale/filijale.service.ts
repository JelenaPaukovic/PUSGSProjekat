import { Injectable } from '@angular/core';
import { Filijala } from '../../entities/filijala/filijala';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilijaleService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44330/api';

  dodajFilijalu(item:Filijala) {
    var body = {
      Ulica : item.ulica,
      Broj : item.broj,
      Mesto : item.mesto,
      RentacarServisID : item.rentacarId,
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/Filijale/AddFilijala', body);
  }

  ucitajFilijale()
  {
    let filNiz = new Array<Filijala>();

    var array = this.http.get<Filijala[]>(this.BaseURI + '/Filijale');

    
    return array;

  }

  ucitajFilijaleZaRentACarOdredjeni(id:Number)
  {
    return this.http.get<Filijala>(this.BaseURI + '/Vozila/GetFilijaleZaOdredjeniServis/'+id);
  }

  izmeniVozilo(fil: Filijala)
  {
    var body = {
      Id : fil.id,
      Ulica : fil.ulica,
      Broj : fil.broj,
      Mesto : fil.mesto,
      RentacarServisID : fil.rentacarId,
    };
    return this.http.post(this.BaseURI + '/Filijale/UpdateFilijala/', body);
  }

  obrisiVozilo(id: Number)
  {
    return this.http.delete(this.BaseURI + '/Filijale/DeleteFilijala/'+id);
  }

}
