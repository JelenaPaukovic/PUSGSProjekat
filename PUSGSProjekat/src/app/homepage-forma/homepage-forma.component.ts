import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Letovi} from 'src/app/entities/letovi/letovi';
import {LetoviService} from 'src/app/services/letovi/letovi.service';
import {Vozilo} from 'src/app/entities/vozilo/vozilo';
import {VoziloService} from 'src/app/services/vozilo/vozilo.service';
import {PromenaLozinkeComponent} from 'src/app/promena-lozinke/promena-lozinke.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';
import {RezervacijaVozilaService} from 'src/app/services/rezervacija-vozila/rezervacija-vozila.service';
import {RezervacijaLetovaService} from 'src/app/services/rezervacija-letova/rezervacija-letova.service';
import { RezervacijaVozila } from 'src/app/entities/rezervacija-vozila/rezervacija-vozila';
import {RezervacijaLetova} from 'src/app/entities/rezervacija-letova/rezervacija-letova';




@Component({
  selector: 'app-homepage-forma',
  templateUrl: './homepage-forma.component.html',
  styleUrls: ['./homepage-forma.component.css']
})
export class HomepageFormaComponent implements OnInit {

  homepageForma : FormGroup;
  currentRate = 8;

  static  uloga = environment.uloga;

  izmena:any;

  rezervacijeVozila:Array<RezervacijaVozila>;
  rezervacijeLetova:Array<RezervacijaLetova>;

  rezervacijaVozilaZaOcenjivanje:RezervacijaVozila;
  rezervacijaLetovaZaOcenjivanje:RezervacijaLetova;

  constructor(private servisRezervacijaVozila:RezervacijaVozilaService,private servisRezervacijaLet:RezervacijaLetovaService) { }

  ngOnInit(): void {
    this.izmena = localStorage.getItem("sifraIzmenjena");
    this.getSvojaVozila();
    this.getSvojiLetovi();

  }
  get Getuloga() {
    return NavbarComponent.uloga;
  }

  //metoda za uzimenja samo tvojih rezervacija vozila
  getSvojaVozila():void
  {
    this.servisRezervacijaVozila.getRezervacijeZaOdredjenog(localStorage.getItem('userName')).subscribe(
      (res: any) => {
        //console.log(res);
          this.rezervacijeVozila = new Array<RezervacijaVozila>();

          res.forEach(element => {
            this.rezervacijeVozila.push(element);
          });

         // console.log(this.rezervacijeVozila);
      }
      );
  }

   //metoda za uzimanje samo tvojih rezervacija destinacija
   getSvojiLetovi():void
   {
     this.servisRezervacijaLet.getRezervacijeZaOdredjenog(localStorage.getItem('userName')).subscribe(
       (res: any) => {
         this.rezervacijeLetova = new Array<RezervacijaLetova>();
 
         res.forEach(element => {
           this.rezervacijeLetova.push(element);
         });
         
         //console.log(this.rezervacijeDestinacija);
       }
       );
   }

   oceniLetoveIAvio():void{
    let ocenaLet = (<HTMLInputElement> document.getElementById("ocenaLet")).value;
    let ocenaAvio = (<HTMLInputElement> document.getElementById("ocenaAvio")).value;

    this.servisRezervacijaLet.oceni(this.rezervacijaLetovaZaOcenjivanje.id,+ocenaLet,+ocenaAvio).subscribe(
      (res: any) => {

      }
      );
  }

  oceniServisIVozilo():void{
    let cenaServis = (<HTMLInputElement> document.getElementById("cenaServis")).value;
    let cenaVozilo = (<HTMLInputElement> document.getElementById("cenaVozilo")).value;

    this.servisRezervacijaVozila.oceni(this.rezervacijaVozilaZaOcenjivanje.id,+cenaServis,+cenaVozilo).subscribe(
      (res: any) => {

      }
      );
  }

  oceniDestinaciju(rez:RezervacijaLetova):void{
    this.rezervacijaLetovaZaOcenjivanje=rez;
  }

  oceniVoziloZaRentACar(rez:RezervacijaVozila):void{
    this.rezervacijaVozilaZaOcenjivanje=rez;
  }

}
