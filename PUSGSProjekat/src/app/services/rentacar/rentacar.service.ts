import { Injectable } from '@angular/core';
import {Rentacar} from '../../entities/rentacar/rentacar';

@Injectable({
  providedIn: 'root'
})
export class RentacarService {

  constructor() { }

  ucitavanjeRentacar() {
    console.log('Učitavanje rent-a-car servisa...');
    return this.mockedRentacar();
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
