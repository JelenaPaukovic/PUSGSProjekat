import { Component, OnInit } from '@angular/core';
import { Rentacar } from 'src/app/entities/rentacar/rentacar';
import { RentacarService } from '../services/rentacar/rentacar.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { UserService } from 'src/app/services/korisnik/user.service';
import { element } from 'protractor';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';
import { RezervacijaVozila } from 'src/app/entities/rezervacija-vozila/rezervacija-vozila';
import { RezervacijaVozilaService } from 'src/app/services/rezervacija-vozila/rezervacija-vozila.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment }  from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';
import { BrzaRezervacijaVozila } from 'src/app/entities/brza-rezervacija-vozila/brza-rezervacija-vozila';
import { BrzaRezervacijaVozilaService } from 'src/app/services/brza-rezervacija-vozila/brza-rezervacija-vozila.service';

@Component({
  selector: 'app-rentacar-podaci',
  templateUrl: './rentacar-podaci.component.html',
  styleUrls: ['./rentacar-podaci.component.css']
})
export class RentacarPodaciComponent implements OnInit {

  allRentacarPodaci: Array<Rentacar>;
  podaci: Rentacar;
  id: number;
  allVozila: Array<Vozilo>;
  filterVozila:  Array<Vozilo>;
  uloga = environment.uloga;
  rezervacija: RezervacijaVozila;
  brzeRez: Array<BrzaRezervacijaVozila>;



  constructor(private rentacarServis: RentacarService, private route:ActivatedRoute, private voziloServis:VoziloService, private rezervacijaServis:RezervacijaVozilaService, private fb: FormBuilder, private brzeRezService:BrzaRezervacijaVozilaService) {
    
    this.allRentacarPodaci = new Array<Rentacar>();
    route.params.subscribe( params => {this.id = params['naziv'];});
    this.podaci = new Rentacar(0,"","","",0,"");
  }

  ngOnInit(): void {
    this.ucitavanjeRentacar();
    
  }


 /* ucitavanjeRentacar(): void {
    

    /*this.service.getServisi
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
  */
  Getuloga(){
    return NavbarComponent.uloga
  }

  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  addMestoPreFilterParam(): ReturnType<any> {
    return new StringFilterParam("MestoPreFilter", this.getFilterFieldValue("MestoPreFilter"));
  }

  addDatumPreFilterParam(): ReturnType<any> {
    return new NumberFilterParam("DatumPreFilter", +this.getFilterFieldValue("DatumPreFilter"));
  }

  addMestoVraFilterParam(): ReturnType<any> {
    return new StringFilterParam("MestoVraFilter", this.getFilterFieldValue("MestoVraFilter"));
  }

  addDatumVraFilterParam(): ReturnType<any> {
    return new NumberFilterParam("DatumVraFilter", +this.getFilterFieldValue("DatumVraFilter"));
  }

  addTipVozilaFilterParam(): ReturnType<any> {
    return new StringFilterParam("TipVozilaFilter", this.getFilterFieldValue("TipVozilaFilter"));
  }

  addBrojPutnikaFilterParam(): ReturnType<any> {
    return new NumberFilterParam("BrojPutnikaFilter", +this.getFilterFieldValue("BrojPutnikaFilter"));
  }

  addCenaOdFilterParam(): ReturnType<any> {
    return new StringFilterParam("CenaOdFilter", this.getFilterFieldValue("CenaOdFilter"));
  }

  addCenaDoFilterParam(): ReturnType<any> {
    return new NumberFilterParam("CenaDoFilter", +this.getFilterFieldValue("CenaDoFilter"));
  }

  resetFilter(): void {
    this.filterVozila = this.allVozila;
  }




  filtriranaVozila(): void {
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("MestoPreFilter")) {
      filterParams.push(this.addMestoPreFilterParam());
    }
    if (this.getFilterFieldValue("DatumPreFilter")) {
      filterParams.push(this.addDatumPreFilterParam());
    }
    if (this.getFilterFieldValue("MestoVraFilter")) {
      filterParams.push(this.addMestoVraFilterParam());
    }
    if (this.getFilterFieldValue("DatumVraFilter")) {
      filterParams.push(this.addDatumVraFilterParam());
    }
    if (this.getFilterFieldValue("TipVozilaFilter")) {
      filterParams.push(this.addTipVozilaFilterParam());
    }
    if (this.getFilterFieldValue("BrojPutnikaFilter")) {
      filterParams.push(this.addBrojPutnikaFilterParam());
    }
    if (this.getFilterFieldValue("CenaOdFilter")) {
      filterParams.push(this.addCenaOdFilterParam());
    }
    if (this.getFilterFieldValue("CenaDoFilter")) {
      filterParams.push(this.addCenaDoFilterParam());
    }

    //this.filterVozila = this.rentACarService.filterRentCarServise(this.allRentACarServis, filterParams);
  }

  pretragaVozila():void{
    let MestoPreFilter = (<HTMLInputElement> document.getElementById("MestoPreFilter")).value;
    let DatumPreFilter = (<HTMLInputElement> document.getElementById("DatumPreFilter")).value;
    let TipVozilaFilter = (<HTMLInputElement> document.getElementById("TipVozilaFilter")).value;
    let MestoVraFilter = (<HTMLInputElement> document.getElementById("MestoVraFilter")).value;
    let DatumVraFilter = (<HTMLInputElement> document.getElementById("DatumVraFilter")).value;
    let BrojPutnikaFilter = (<HTMLInputElement> document.getElementById("BrojPutnikaFilter")).value;
    let CenaOdFilter = (<HTMLInputElement> document.getElementById("CenaOdFilter")).value;
    let CenaDoFilter = (<HTMLInputElement> document.getElementById("CenaDoFilter")).value;

    var id = this.podaci.id;

    this.rezervacija = new RezervacijaVozila(1,this.podaci.id,0,"",0,DatumPreFilter,DatumVraFilter,null);

    this.voziloServis.pretraziVozila(id,MestoPreFilter,DatumPreFilter,TipVozilaFilter,MestoVraFilter,DatumVraFilter,+BrojPutnikaFilter,+CenaOdFilter,+CenaDoFilter).subscribe(
      (res: any) => {
        if (res != null ) {
          this.filterVozila = new Array<Vozilo>();
         res.forEach(element => {
            this.filterVozila.push(element);
         });
         
        }
      }
    );
  }


  ucitavanjeRentacar() {
    this.rentacarServis.ucitajOdredjeniRentACarServis(this.id).subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        //temp.forEach(element => {
          
          const ak = new Rentacar(temp.id,temp.naziv,temp.adresa,temp.promotivniOpis, temp.ocena, temp.admin);
          console.log(temp);
          
          if(temp.vozila!=null)
          {
            if(temp.vozila.length!=0)
            {
              console.log(ak.vozila);
              ak.vozila=temp.vozila;
             // this.filteredVozila=temp.vozila;
            }
          }
         
          this.podaci=ak;
       // });

        this.loadVozila();

      } else {
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    );
  }

  loadVozila()
  {
    this.voziloServis.ucitajVozilaZaRentACarOdredjeni(this.id).subscribe(
      (res: any) => {
        res.forEach(element => {
              this.podaci.vozila.push(element);
              
          });
          //this.filteredVozila=this.profil.vozila;
      }
      );
  }

  rezervisi(vozilo:Vozilo):void{ 
    this.rezervacija.idVozila = vozilo.id;
    this.rezervacija.vozilo = vozilo;
    this.rezervacija.idKlijenta = localStorage.getItem('userName');
    this.rezervacijaServis.rezervisiVozilo(this.rezervacija).subscribe(
      (res: any) => {
       /* res.forEach(element => {
              
            
          });*/
          console.log(res);
          alert("Uspesno ste rezervisali vozilo!");
      },
      err => {
        if (err.status == 400)
        {
          alert("Doslo je do konflikta, osvezite podatke i probajte ponovo!");
        }
      }
      );
  }

  formModel = this.fb.group({
    MestoPreFilter: ['',Validators.required],
    DatumPreFilter: ['',Validators.required],
    TipVozilaFilter: ['',Validators.required],
    MestoVraFilter: ['',Validators.required],
    DatumVraFilter: ['',Validators.required],
    BrojPutnikaFilter: ['',Validators.required],
    CenaOdFilter: [''],
    CenaDoFilter: ['']
  });

  brzeRezervacije():void{
    this.brzeRezService.getBrzaRezZaRent(this.podaci.id).subscribe(
      (res: any) => {
        this.brzeRez = new Array<BrzaRezervacijaVozila>();
        res.forEach(element => {
              console.log('e');
              this.brzeRez.push(element);
              console.log(this.brzeRez);
          });
          //this.filteredVozila=this.profil.vozila;
      }
      );
  }

  RezervisiBrzuRezervaciju(rez:BrzaRezervacijaVozila):void{
    this.brzeRezService.rezervisiVoziloBrzo(rez).subscribe(
      (res: any) => {
          console.log(res);
          alert("Uspesno ste rezervisali vozilo!");
      },
      err => {
        if (err.status == 400)
        {
          alert("Doslo je do konflikta, osvezite podatke i probajte ponovo!");
        }
      }
      );
  }



}
