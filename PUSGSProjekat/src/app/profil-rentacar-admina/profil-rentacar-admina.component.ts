import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../entities/korisnik/korisnik';
import { ActivatedRoute, RouteConfigLoadEnd, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/services/korisnik/user.service';
import { element } from 'protractor';
//import { KorisnikService } from 'src/app/services/korisnik/user.service';
import { RentacarService } from '../services/rentacar/rentacar.service';
import { Rentacar } from 'src/app/entities/rentacar/rentacar';

@Component({
  selector: 'app-profil-rentacar-admina',
  templateUrl: './profil-rentacar-admina.component.html',
  styleUrls: ['./profil-rentacar-admina.component.css']
})
export class ProfilRentacarAdminaComponent implements OnInit {

  allAdminRentacar: Array<Korisnik>;
  allRentacarPodaci: Array<Rentacar>;
  adminR: Korisnik;
  servisZaIzmenu: Rentacar;

  constructor(private korisnikServis: KorisnikService, private rentacarService: RentacarService, private route:ActivatedRoute, private service: UserService) {
    
    this.allAdminRentacar = new Array<Korisnik>();
    this.allRentacarPodaci = new Array<Rentacar>();
  }

  ngOnInit(): void {
    this.ucitavanjeKorisnika();
    this.ucitavanjeRentacar();
  }


  ucitavanjeKorisnika(): void {
    
    this.service.getKorisnici
    ().subscribe(
      (res: any) => {
        if(res != null){
          var temp = res;
          temp.forEach(element =>{
            console.log(element);
            const aar = new Korisnik(element.ime, element.prezime, element.grad, element.brojTelefona, element.emailAdresa, element.lozinka);
            this.allAdminRentacar.push(aar)
          })
        }
      },
    );
  
    }

    ucitavanjeRentacar(): void {
    this.service.getServisi
    ().subscribe(
      (res: any) => {
        if(res != null){
          var temp = res;
          temp.forEach(element =>{
            console.log(element);
            const ak = new Rentacar(element.id, element.naziv, element.adresa, element.opis, 2);
            this.allRentacarPodaci.push(ak)
          })
        }
      },
    );


  }


  izmeniServis(servis: Rentacar): void {
    this.servisZaIzmenu = servis;
  }




  izmeniInforimacijeServisa(): void {
    let naziv = (<HTMLInputElement> document.getElementById("naziv")).value;
    

    let adresa = (<HTMLInputElement> document.getElementById("adresa")).value;
    

    let opis = (<HTMLInputElement> document.getElementById("opis")).value;
   

    let cenovnik = (<HTMLInputElement> document.getElementById("cenovnik")).value;
   

    let spisak = (<HTMLInputElement> document.getElementById("spisak")).value;
    

    let filijale = (<HTMLInputElement> document.getElementById("filijale")).value;
    this.azurirajServis(naziv, adresa, opis, cenovnik, spisak, filijale);
  }

  azurirajServis(naziv:string, adresa:string, opis:string, cenovnik:string, spisak:string, filijale:string): void {
     
    //alert('Vaša izmena je sačuvana!');
  }


}
