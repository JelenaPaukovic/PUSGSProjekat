import { Injectable } from '@angular/core';
import { Korisnik } from 'src/app/entities/korisnik/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor() { }

  ucitavanjeKorisnika() {
    console.log('Učitavanje korisnika...');
    //return this.mockedAvio();
  }


  mockedKorisnik(): Array<Korisnik> {
    let allKorisnik = new Array<Korisnik>();

    //const korisnik1 = new Korisnik('admin@uns.ac.rs', 'admin', 'Petar', 'Petrović', 'Novi Sad', '021 433-377','5 - prijatelja');
    const korisnik1 = new Korisnik('Petar', 'Petrovic', 'Novi Sad','021 433-377', 'admin@uns.ac.rs', 'admin', '5 - prijatelja' );
    allKorisnik.push(korisnik1);

    return allKorisnik;

    
  }

}
