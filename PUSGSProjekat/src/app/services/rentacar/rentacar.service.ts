import { Injectable } from '@angular/core';
import {Rentacar} from '../../entities/rentacar/rentacar';
import { Vozilo } from '../../entities/vozilo/vozilo';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import {map} from 'rxjs/add/operator/map';
import {Observable,of, from } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class RentacarService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  formModel = this.fb.group({
    naziv: [''],
    adresa: [''],
    admin: [''],
  });

  dodaj() {
    var body = {
      Naziv: this.formModel.value.naziv,
      Adresa: this.formModel.value.adresa,
      Admin: this.formModel.value.admin,
      Odobreno: false
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/RentACarServis/AddRentACarServis', body);
  }

  mockedRentacar(): Array<Rentacar> {
    let allRentacar = new Array<Rentacar>();

   /* const rac1 = new Rentacar('Drive safe', 'Bulevar kralja Petra 120', 5, 'Vozite sa nama i vozite bezbedno!', '1000 dinara', 'Audi i mercedes', 'Filijale u Novom Sadu i Beogradu');
    const rac2 = new Rentacar('Sedi i vozi', 'Dimitrija Tucovića 10', 5, 'Vozite sa nama i vozite bezbedno!', 'Cenovnik', 'Spisak', 'Filijale');
    const rac3 = new Rentacar('Formula 1', 'Bulevar Oslobođenja 139', 5, 'Vozite sa nama i vozite bezbedno!', 'Cenovnik', 'Spisak', 'Filijale');
    const rac4 = new Rentacar('Golf', 'Vojvođanska 30', 5, 'Vozite sa nama i vozite bezbedno!', 'Cenovnik', 'Spisak', 'Filijale');
    const rac5 = new Rentacar('Auto robot', 'Futoška 15', 5, 'Vozite sa nama i vozite bezbedno!', 'Cenovnik', 'Spisak', 'Filijale');

    allRentacar.push(rac1);
    allRentacar.push(rac2);
    allRentacar.push(rac3);
    allRentacar.push(rac4);
    allRentacar.push(rac5);*/

    return allRentacar;
  }

}
