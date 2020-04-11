import { Injectable } from '@angular/core';
import {Avio} from '../entities/avio';

@Injectable({
  providedIn: 'root'
})
export class AvioService {

  constructor() { }

  ucitavanjeAvio() {
    console.log('Učitavanje avio servisa...');
    return this.mockedAvio();
  }


  mockedAvio(): Array<Avio> {
    let allAvio = new Array<Avio>();

    const av1 = new Avio('Air Serbia', 'Beograd, Srbija', 5);
    const av2 = new Avio('Turkish Airlines', 'Istanbul, Turska', 5);
    const av3 = new Avio('Ryanair', 'Dablin, Irska', 5);
    const av4 = new Avio('Flydubai','Dubai, Ujedinjeni Arapski Emirati', 5);
    const av5 = new Avio('easyJet','London, Velika Britanija', 5);
   

    allAvio.push(av1);
    allAvio.push(av2);
    allAvio.push(av3);
    allAvio.push(av4);
    allAvio.push(av5);

    return allAvio;
  }

}