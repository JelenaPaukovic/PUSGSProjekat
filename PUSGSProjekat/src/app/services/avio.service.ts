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

    const av1 = new Avio('Air Serbia', 'Beograd, Srbija', 5, 'Letite udobno i bezbedno', 'Cenovnik', 'Spisak', 'Filijale');
    const av2 = new Avio('Turkish Airlines', 'Istanbul, Turska', 5, 'Prosiri svoj svet', 'Cenovnik', 'Spisak', 'Filijale');
    const av3 = new Avio('Ryanair', 'Dablin, Irska', 5, 'Preletite svet sa nama', 'Cenovnik', 'Spisak', 'Filijale');
    const av4 = new Avio('Flydubai','Dubai, Ujedinjeni Arapski Emirati', 5, 'Letite sa uzivanjem', 'Cenovnik', 'Spisak', 'Filijale');
    const av5 = new Avio('easyJet','London, Velika Britanija', 5, 'Letite jeftino i sigurno', 'Cenovnik', 'Spisak', 'Filijale');
    
    
   

    allAvio.push(av1);
    allAvio.push(av2);
    allAvio.push(av3);
    allAvio.push(av4);
    allAvio.push(av5);

    return allAvio;
  }

}