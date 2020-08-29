import { Component, OnInit } from '@angular/core';
import { RentacarService } from 'src/app/services/rentacar/rentacar.service';
import { Rentacar } from 'src/app/entities/rentacar/rentacar';
import { TransformVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';
import { Filijala } from 'src/app/entities/filijala/filijala';
import { FilijaleService } from 'src/app/services/filijale/filijale.service';
import { BrzaRezervacijaVozila } from 'src/app/entities/brza-rezervacija-vozila/brza-rezervacija-vozila';
import { BrzaRezervacijaVozilaService } from 'src/app/services/brza-rezervacija-vozila/brza-rezervacija-vozila.service';

@Component({
  selector: 'app-profil-rentacar-admina',
  templateUrl: './profil-rentacar-admina.component.html',
  styleUrls: ['./profil-rentacar-admina.component.css']
})
export class ProfilRentacarAdminaComponent implements OnInit {

  allRentacarServis: Array<Rentacar>;
  servisToEdit:Rentacar;
  servisZaVozilo:Rentacar;
  filijalaToEdit:Filijala;
  voziloToEdit:Vozilo;
  vozilaZaBrzuRezervaciju: Array<Vozilo>;
  idZaBrzuRezervaciju;
  brzeRez: Array<BrzaRezervacijaVozila>;

  public listItems: Array<Filijala> = [];
  public listItemsZaOdredjen: Array<Filijala> = [];

  constructor(private rentACarService: RentacarService,private voziloService: VoziloService,private filijalaService: FilijaleService,private brzaRezVozService: BrzaRezervacijaVozilaService) { 
    this.allRentacarServis = new Array<Rentacar>();    
  }

  ngOnInit(): void {
    this.loadRentServis();
    this.ucitajSveFilijale();
    this.ucitajSveBrzeRezervacije();
    //this.loadVozila();
  }

  ucitajSveFilijale(){
   
    this.filijalaService.ucitajFilijale().subscribe(
    (res: any) => {
      if (res != null) {

        this.listItems =  new Array<Filijala>();  

        res.forEach(element => {
        
          //console.log(element);
          var id = element.rentACarId;
          var f = new Filijala(element.id, element.ulica, element.broj, element.mesto);
          f.rentacarId = element.rentacarServisID;
          this.listItems.push(f);
          
        });
        
       
      } else {
        res.errors.forEach(element => {
          switch (element.code) {
            default:
              break;
          }
        });
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    
  );
}

  dodajVoziloZaRentACar(servis: Rentacar): void {
    this.servisZaVozilo = servis;
    this.listItems.forEach(element => {
      if(element.rentacarId == servis.id)
      {
        this.listItemsZaOdredjen.push(element);
      }
    });
  }

  dodajFilijaluaRentACar(servis: Rentacar): void {
    this.servisZaVozilo = servis;
  }

  dodajVoziloInfo():void{
    let nazivVoz = (<HTMLInputElement> document.getElementById("nazivVoz")).value;
    let markaVoz = (<HTMLInputElement> document.getElementById("markaVoz")).value;
    let modelVoz = (<HTMLInputElement> document.getElementById("modelVoz")).value;
    let godinaVoz = (<HTMLInputElement> document.getElementById("godinaVoz")).value;
    let brojSedVoz = (<HTMLInputElement> document.getElementById("brojSedVoz")).value;
    let tipVoz = (<HTMLInputElement> document.getElementById("tipVoz")).value;
    let filId = (<HTMLInputElement> document.getElementById("filId")).value;

    //console.log(this.servisZaVozilo);
    var temp = new Vozilo(5,nazivVoz,markaVoz,modelVoz,+godinaVoz,+brojSedVoz,tipVoz,[]);
    temp.rentacarId = this.servisZaVozilo.id;
    temp.filijalaId = +filId;
    //this.servisZaVozilo.vozila.push(temp);
    
    this.voziloService.dodajVozilo(temp).subscribe(
      (res: any) => {
        if (res != null ) {
          this.loadRentServis();
          //alert("Vasa izmena je sacuvana!");
          //this.loadRentServis();
          //(<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
  }

    dodajFilijaluInfo():void{
      let ulicaFil = (<HTMLInputElement> document.getElementById("ulicaFil")).value;
      let brojFil = (<HTMLInputElement> document.getElementById("brojFil")).value;
      let mestoFil = (<HTMLInputElement> document.getElementById("mestoFil")).value;
  
      var temp = new Filijala(3,ulicaFil,+brojFil,mestoFil);
      temp.rentacarId = this.servisZaVozilo.id;
      //this.listItems.push(temp);
       
      this.filijalaService.dodajFilijalu(temp).subscribe(
        (res: any) => {
          if (res != null ) {
            this.ucitajSveFilijale();
            //alert("Vasa izmena je sacuvana!");
            //this.loadRentServis();
            //(<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
          }
        }
      );
    
    this.rentACarService.izmeniRentACarServis(this.servisZaVozilo).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadRentServis();
          //this.loadVozila();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );

    }

  editRentACar(servis: Rentacar): void {
    this.servisToEdit = servis;
  }


  editFilijala(filijala: Filijala): void {
   // console.log(filijala);
    this.filijalaToEdit = filijala;
  }


  obrisiFilijalu(filijala:Filijala): void {
    this.filijalaService.obrisiVozilo(filijala.id).subscribe(
      (res: any) => {
        this.ucitajSveFilijale();
      }
    );
  }


  editRentACarInfo(): void {
    let naziv = (<HTMLInputElement> document.getElementById("naziv")).value;
    let adresa = (<HTMLInputElement> document.getElementById("adresa")).value;
    let opis = (<HTMLInputElement> document.getElementById("opis")).value;

    this.servisToEdit.naziv = naziv;
    this.servisToEdit.adresa = adresa;
    this.servisToEdit.promotivniOpis = opis;

    this.rentACarService.izmeniRentACarServis(this.servisToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadRentServis();
          //this.loadVozila();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    this.servisToEdit = null;
  }

  izmeniCenovnikInfo():void{
    let cenaPrviDan = (<HTMLInputElement> document.getElementById("cenaPrviDanFo")).value;
    let cenaSledeciDan = (<HTMLInputElement> document.getElementById("cenaSledeciDanFo")).value;

    this.servisToEdit.cenaPrviDan = +cenaPrviDan;
    this.servisToEdit.cenaSledeciDan = +cenaSledeciDan;

    this.rentACarService.izmeniRentACarServis(this.servisToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadRentServis();
          //this.loadVozila();
          //(<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    this.servisToEdit = null;

  }

  pogledajCenovnik(servis:Rentacar):void{
    this.servisToEdit = servis;
  }
  
  odobri(servis:Rentacar):void{
    this.rentACarService.odobri(servis.id).subscribe(
      (res: any) => {
        this.loadRentServis();
      },
      err => {
        alert('Morate popuni sve podatke o rent-a-car servisu!')
       //console.log('greska');
       // console.log(err);
      }
    );
  }

  /*
  loadRentServis(): void {
    this.allRentACarServis = this.rentACarService.loadRentACar();
     this.rentACarService.ucitajRentACarServise();
  }*/

  loadRentServis() {
    this.allRentacarServis = new Array<Rentacar>();  
    
    this.rentACarService.ucitajRentACarServisZaAdmina(localStorage.getItem("userName")).subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        temp.forEach(element => {
          
          const ak = new Rentacar(element.id,element.naziv,element.adresa,element.promotivniOpis, 4,element.admin);
          ak.cenaPrviDan = element.cenaPrviDan;
          ak.cenaSledeciDan = element.cenaSledeciDan;
          ak.odobreno = element.odobreno;
         // console.log(element);
          if(ak.vozila.length!=0)
          {
            //console.log(ak.vozila);
            ak.vozila=element.vozila;
          }
         
          this.allRentacarServis.push(ak);
        });

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
    this.voziloService.ucitajVozila().subscribe(
      (res: any) => {
        res.forEach(element => {

          //console.log(element);
          this.allRentacarServis.forEach(item => {

            if(element.rentACarServisID == item.id)
            {
              item.vozila.push(element);
            }

          });

        });
      }
      );
  }

  obrisiVozilo(vozilo:Vozilo): void {

    this.voziloService.obrisiVozilo(vozilo.id).subscribe(
      (res: any) => {
        this.loadRentServis();
      }
    );
  }

  editVozilo(vozilo:Vozilo): void {
    this.voziloToEdit=vozilo;
  }

  izmeniVoziloInfo():void{

    let nazivVoz = (<HTMLInputElement> document.getElementById("nazivVozIz")).value;
    let markaVoz = (<HTMLInputElement> document.getElementById("markaVozIz")).value;
    let modelVoz = (<HTMLInputElement> document.getElementById("modelVozIz")).value;
    let godinaVoz = (<HTMLInputElement> document.getElementById("godinaVozIz")).value;
    let brojSedVoz = (<HTMLInputElement> document.getElementById("brojSedVozIz")).value;
    let tipVoz = (<HTMLInputElement> document.getElementById("tipVozIz")).value;

    this.voziloToEdit.naziv=nazivVoz;
    this.voziloToEdit.marka=markaVoz;
    this.voziloToEdit.model=modelVoz;
    this.voziloToEdit.godinaProizvodnje=+godinaVoz;
    this.voziloToEdit.brojSedista=+brojSedVoz;
    this.voziloToEdit.tipVozila=tipVoz;

    this.voziloService.izmeniVozilo(this.voziloToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          this.loadRentServis();
          //alert("Vasa izmena je sacuvana!");
          //this.loadRentServis();
          //(<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
  }

  izmeniFilijalaInfo():void{

    let ulicaFilIz = (<HTMLInputElement> document.getElementById("ulicaFilIz")).value;
    let brojFilIz = (<HTMLInputElement> document.getElementById("brojFilIz")).value;
    let mestoFilIz = (<HTMLInputElement> document.getElementById("mestoFilIz")).value;

    this.filijalaToEdit.ulica=ulicaFilIz;
    this.filijalaToEdit.broj=+brojFilIz;
    this.filijalaToEdit.mesto=mestoFilIz;

    this.filijalaService.izmeniVozilo(this.filijalaToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          this.ucitajSveFilijale();
        }
      }
    );
  }

  vozilaZaOdredjeniServis(rentacar:Rentacar):void{

    var id = rentacar.id ;
    this.idZaBrzuRezervaciju =id;

    this.vozilaZaBrzuRezervaciju = new Array<Vozilo>();

    this.voziloService.ucitajVozilaZaRentACarOdredjeni(id).subscribe(
      (res: any) => {

        if (res != null ) {
          //pravimo vozila i stavljamo u neku listu
          res.forEach(element => {
            this.vozilaZaBrzuRezervaciju.push(element);
          });
         
        }

      }
    );

  }

  dodajBrzuRezervaciju():void{

    let voziloNazivFo = (<HTMLInputElement> document.getElementById("voziloNazivFo")).value;
    let pocetniDatFo = (<HTMLInputElement> document.getElementById("pocetniDatFo")).value;
    let krajnjiDatFo = (<HTMLInputElement> document.getElementById("krajnjiDatFo")).value;
    let popustFo = (<HTMLInputElement> document.getElementById("popustFo")).value;

    var idRent = this.idZaBrzuRezervaciju;
    var email = '';
    //console.log(voziloNazivFo);
    var rez = new BrzaRezervacijaVozila(0,idRent,+voziloNazivFo,email,+popustFo,0,0,pocetniDatFo,krajnjiDatFo,[]);

    this.brzaRezVozService.dodajBrzuRez(rez).subscribe(
      (res: any) => {

        if (res != null ) {
 
        }

      }
    );
  } 

  ucitajSveBrzeRezervacije(){
   
    this.brzaRezVozService.ucitajSveBrzeRez().subscribe(
    (res: any) => {
      if (res != null) {

        this.brzeRez =  new Array<BrzaRezervacijaVozila>();  

        res.forEach(element => {

          element.krajnjiDatum =  element.krajnjiDatum.split('T')[0];
          element.pocetniDatum =  element.pocetniDatum.split('T')[0];
          this.brzeRez.push(element);
          
        });
       
      } else {
        res.errors.forEach(element => {
          switch (element.code) {
            default:
              break;
          }
        });
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    
  );
}
}
