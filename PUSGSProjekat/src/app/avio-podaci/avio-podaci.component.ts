import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AvioService } from '../services/avio/avio.service';
import { Avio } from 'src/app/entities/avio/avio';
import { ActivatedRoute, Router } from '@angular/router';
import {Letovi} from 'src/app/entities/letovi/letovi';
import { LetoviService} from 'src/app/services/letovi/letovi.service';
import {AbstractFilterParam} from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import {StringFilterParam} from 'src/app/entities/string-filter-param/string-filter-param';
import {NumberFilterParam} from 'src/app/entities/number-filter-param/number-filter-param';
import {environment} from 'src/environments/environment';
import {RezervacijaLetova} from 'src/app/entities/rezervacija-letova/rezervacija-letova';
import {RezervacijaLetovaService} from 'src/app/services/rezervacija-letova/rezervacija-letova.service';
import {RentacarService} from 'src/app/services/rentacar/rentacar.service';
import {NavbarComponent} from 'src/app/navbar/navbar.component';
import { element } from 'protractor';


@Component({
  selector: 'app-avio-podaci',
  templateUrl: './avio-podaci.component.html',
  styleUrls: ['./avio-podaci.component.css']
})
export class AvioPodaciComponent implements OnInit {

  allAvioPodaci: Array<Avio>;
  servis: Avio;
  id: number;

  rezervacija: RezervacijaLetova;
  uloga = environment.uloga;

  allLetovi: Array<Letovi>;
  filteredLetovi: Array<Letovi>;

  constructor(private avioService: AvioService, private rentacarService: RentacarService, private route:ActivatedRoute, private letoviService: LetoviService, private rezervacijaService:RezervacijaLetovaService, private fb:  FormBuilder, private router:Router ) {

    this.allAvioPodaci = new Array<Avio>();
    route.params.subscribe( params => {this.id = params['id'];});
    this.servis= new Avio(0,"","","","","","","","","","");
   }

  ngOnInit(): void {
    this.ucitavanjeAvio();
  }

  ucitavanjeAvio(): void {
   // this.allAvioPodaci = this.avioService.ucitavanjeAvio();
    //this.allAvioPodaci.forEach(element =>{
     // if(element.naziv = this.naziv){
     //   this.servis = element;

     // }
   // })

   this.avioService.ucitajOdredjenuAvio(this.id).subscribe(
     (res:any) => {
       if(res != null){
         var temp = res;

         const ak = new Avio(temp.id, temp.naziv, temp.adresa, temp.promotivniOpis, temp.destinacijePoslovanja, temp.letovi, temp.spisakKarataSaPopustom, temp.konfSegmenataIMesta, temp.cenovnik, temp.infoPrtljag, temp.admin);
         console.log(temp);

         if(temp.destinacija != null){
           if(temp.destinacija.length !=0){
             console.log(ak.destinacije);
             ak.destinacije=temp.destinacija;
           }
         }
         this.servis=ak;

         this.ucitavanjeLetovi();
       }else {

       }
     },
     err => {
       console.log('greska');
       console.log(err);
     }
   );
  }

  ucitavanjeLetovi(){
    this.letoviService.ucitajLetoviZaAviokompanijuOdredjenu(this.id).subscribe(
      (res :any) => {
        res.forEach(element => {
          this.servis.destinacije.push(element);
        });
      }
    );
  }

  resetFilter() : void {
    this.filteredLetovi =this.allLetovi;
  }

  Getuloga(){
    return NavbarComponent.uloga
  }

  rezervisi(destinacija : Letovi):void {
    console.log(destinacija);
    console.log(this.rezervacija);
    this.rezervacija= new RezervacijaLetova(1,1,1,"1",1,"2020-06-06","2020-07-07",destinacija);
    this.rezervacija.idLeta=destinacija.idLet;
    this.rezervacija.idKlijenta=localStorage.getItem('userName');
    this.rezervacija.destinacija=destinacija;
    this.rezervacijaService.rezervisiLet(this.rezervacija).subscribe(
      (res:any) => {
        console.log(res);

        if(confirm('Da li zelite da rezervisete i rent a car vozilo')){
          this.pronadjiRentacar(this.rezervacija.destinacija.nazivDestinacije, this.rezervacija.pocetniDatum);

        }else {
          this.router.navigateByUrl('homepage-forma');

        }
      },
      err => {
        if(err.status ==400){
          alert("Doslo je do konflikta, osvezite podateke i pokusajte ponovo!");

        }
      }
    );
  }

  pronadjiRentacar(lokacija:string, datum:string){
    this.rentacarService.rentacarPosleAvio(lokacija, datum).subscribe(
      (res:any) => {
        this.router.navigateByUrl("rentacar" + res.id + "/detalji");
      }
    );
  }

}
