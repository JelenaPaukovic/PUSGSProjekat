import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Avio } from '../entities/avio/avio';
import { Letovi } from '../entities/letovi/letovi';
import { BrzaRezervacijaLetova } from '../entities/brza-rezervacija-letova/brza-rezervacija-letova';
import { AvioService } from '../services/avio/avio.service';
import { LetoviService } from '../services/letovi/letovi.service';
import { BrzaRezervacijaLetovaService } from '../services/brza-rezervacija-letova/brza-rezervacija-letova.service';

@Component({
  selector: 'app-profil-avio-admina',
  templateUrl: './profil-avio-admina.component.html',
  styleUrls: ['./profil-avio-admina.component.css']
})
export class ProfilAvioAdminaComponent implements OnInit {

  avioAdminForma : FormGroup;

  allAvion : Array<Avio>;
  avionToEdit : Avio;
  letoviToEdit : Avio;
  letoviEdit : Letovi;
  letoviZaBrzuRezervaciju : Array<Letovi>;
  idZaBrzuRezervaciju;
  brzaRez : Array<BrzaRezervacijaLetova>;


  constructor(private avionService: AvioService, private letoviService: LetoviService, private brzaRezLetService: BrzaRezervacijaLetovaService) {
    this.allAvion =  new Array<Avio>();

   }

  ngOnInit(): void {
    this.loadAvion();
    this.ucitajSveBrzeRezervacije();
  }

  loadAvion() {
    this.allAvion = new Array<Avio>();  
    
    this.avionService.ucitajAvio().subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        temp.forEach(element => {
          //console.log(element);
          const ak = new Avio(element.idAvio, element.naziv, element.adresa, element.promotivniOpis, element.destinacijePoslovanja
            , element.letovi, element.spisakKarataSaPopustom, element.konfSegmenataIMesta, element.cenovnik, element.infoPrtljag, element.admin);
          ak.cenaPrviDan = element.cenaPrviDan;
          ak.cenaSledeciDan = element.cenaSledeciDan;
          ak.odobreno = element.odobreno;
            //console.log(element);
          if(ak.destinacije.length!=0)
          {
            //console.log(ak.destinacija);
            ak.destinacije=element.destinacija;
          }
         
          this.allAvion.push(ak);
        });

        this.loadLetovi();

      } else {
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    );
  }

  loadLetovi()
  {
    this.letoviService.ucitajLetovi().subscribe(
      (res: any) => {
        res.forEach(element => {

          //console.log(element);
          this.allAvion.forEach(item => {
           // console.log(element);
            if(element.idAvioKompanije == item.idAvio)
            {
              item.destinacije.push(element);
            }

            //console.log(this.allAvion);

          });

        }); 
      }
      );
  }

  editAvioInfo(): void {
    let naziv = (<HTMLInputElement> document.getElementById("naziv")).value;
    let adresa = (<HTMLInputElement> document.getElementById("adresa")).value;
    let promotivniOpis = (<HTMLInputElement> document.getElementById("promotivniOpis")).value;
    let destinacijePoslovanja = (<HTMLInputElement> document.getElementById("destinacijePoslovanja")).value;
    //let letovi = (<HTMLInputElement> document.getElementById("letovi")).value;
    let spisakKarataSaPopustom = (<HTMLInputElement> document.getElementById("spisakKarataSaPopustom")).value;
    let konfSegmenataIMesta = (<HTMLInputElement> document.getElementById("konfSegmenataIMesta")).value;
    let cenovnik = (<HTMLInputElement> document.getElementById("cenovnik")).value;
    let infoPrtljag = (<HTMLInputElement> document.getElementById("infoPrtljag")).value;
    //this.updateAvio(nazivAvioKompanije, adresa, promotivniOpis, letovi, destNaKojimPosluje, spisakKarataSaPopustomZaBrzuRez, konfigSegMesta, cenovnik, infoPrtljag);

    this.avionToEdit.naziv = naziv;
    this.avionToEdit.adresa = adresa;
    this.avionToEdit.promotivniOpis = promotivniOpis;
    this.avionToEdit.destinacijePoslovanja = destinacijePoslovanja;
    this.avionToEdit.spisakKarataSaPopustom = spisakKarataSaPopustom;
    this.avionToEdit.konfSegmenataIMesta = konfSegmenataIMesta;
    this.avionToEdit.cenovnik = cenovnik;
    this.avionToEdit.infoPrtljag = infoPrtljag;

    this.avionService.izmeniAvio(this.avionToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadAvion();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    this.avionToEdit = null;
  }

  odobri(servis:Avio):void{
    this.avionService.odobri(servis.idAvio).subscribe(
      (res: any) => {
        this.loadAvion();
      },
      err => {
        alert('Morate popuni sve podatke o rent-a-car servisu!')

      }
    );
  }

  EditAvio(avion: Avio): void {
    this.avionToEdit = avion;
  }

  dodajLetZaAvioKompaniju(letovi: Avio): void{

    this.letoviToEdit = letovi;

  }

  dodajLetInfo():void
  {
    let nazivDest = (<HTMLInputElement> document.getElementById("destNaziv")).value;
    let datumVremeSl = (<HTMLInputElement> document.getElementById("datVremeSl")).value;
    let datumVremePol = (<HTMLInputElement> document.getElementById("datVremePol")).value;
    let vremePutov = (<HTMLInputElement> document.getElementById("vremePut")).value;
    let duzinaPutov = (<HTMLInputElement> document.getElementById("duzinaPut")).value;
    let brojPresed = (<HTMLInputElement> document.getElementById("brojPresed")).value;
    let lokacPresed = (<HTMLInputElement> document.getElementById("lokacPresed")).value;
    let cenaKarte = (<HTMLInputElement> document.getElementById("kartaCena")).value;

    var temp = new Letovi(5,nazivDest,datumVremeSl,datumVremePol,vremePutov,duzinaPutov,+brojPresed,lokacPresed,cenaKarte);
    temp.idAvioKompanije = this.letoviToEdit.idAvio;
    this.letoviToEdit.destinacije.push(temp);

    this.letoviService.dodajLet(temp).subscribe(
      (res: any) => {
        if (res != null ) {
        }
      }
    );
    
    this.avionService.izmeniAvio(this.letoviToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadAvion();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
  }
  obrisiLet(letovi:Letovi): void {

    this.letoviService.obrisiLetovi(letovi.idLet).subscribe(
      (res: any) => {
        this.loadAvion();
      }
    );
  }

  editLet(letovi:Letovi): void {
    this.letoviEdit=letovi;
  }

  izmeniLetInfo():void{

    let nazivDest = (<HTMLInputElement> document.getElementById("destNazivIzm")).value;
    let datumVremeSl = (<HTMLInputElement> document.getElementById("datVremeSlIzm")).value;
    let datumVremePol = (<HTMLInputElement> document.getElementById("datVremePolIzm")).value;
    let vremePutov = (<HTMLInputElement> document.getElementById("vremePutIzm")).value;
    let duzinaPutov = (<HTMLInputElement> document.getElementById("duzinaPutIzm")).value;
    let brojPresed = (<HTMLInputElement> document.getElementById("brojPresedIzm")).value;
    let lokacPresed = (<HTMLInputElement> document.getElementById("lokacPresedIzm")).value;
    let cenaKarte = (<HTMLInputElement> document.getElementById("kartaCenaIzm")).value;

    this.letoviEdit.nazivDestinacije=nazivDest;
    this.letoviEdit.datumIVremePoletanja=datumVremePol;
    this.letoviEdit.datumIVremeSletanja=datumVremeSl;
    this.letoviEdit.vremePutovanja=vremePutov;
    this.letoviEdit.duzinaPutovanja=duzinaPutov;
    this.letoviEdit.brojPresedanja=+brojPresed;
    this.letoviEdit.lokacijaPresedanja=lokacPresed;
    this.letoviEdit.cenaKarte=cenaKarte;

    this.letoviService.izmeniLetovi(this.letoviEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          this.loadAvion();
        }
      }
    );
  }
  letoviZaOdredjenuAvioKompaniju(aviokompanija:Avio):void{

    var id = aviokompanija.idAvio ;
    this.idZaBrzuRezervaciju =id;

    this.letoviZaBrzuRezervaciju = new Array<Letovi>();

    this.letoviService.ucitajLetoviZaAviokompanijuOdredjenu(id).subscribe(
      (res: any) => {

        if (res != null ) {
          //pravimo destinacije i stavljamo u neku listu
          res.forEach(element => {
              console.log(element);
            this.letoviZaBrzuRezervaciju.push(element);
          });
         
        }

      }
    );

  }
  izmeniCenovnikInfo():void{
    let cenaPrviDan = (<HTMLInputElement> document.getElementById("cenaPrviDanFo")).value;
    let cenaSledeciDan = (<HTMLInputElement> document.getElementById("cenaSledeciDanFo")).value;

    this.avionToEdit.cenaPrviDan = +cenaPrviDan;
    this.avionToEdit.cenaSledeciDan = +cenaSledeciDan;

    this.avionService.izmeniAvio(this.avionToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadAvion();
          //this.loadVozila();
          //(<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    this.avionToEdit = null;

  }

  pogledajCenovnik(servis:Avio):void{
    this.avionToEdit = servis;
  }

  dodajBrzuRezervaciju():void{

    let destinacijaNazivFo = (<HTMLInputElement> document.getElementById("destinacijaNazivFo")).value;
    let pocetniDatFo = (<HTMLInputElement> document.getElementById("pocetniDatFo")).value;
    let krajnjiDatFo = (<HTMLInputElement> document.getElementById("krajnjiDatFo")).value;
    let popustFo = (<HTMLInputElement> document.getElementById("popustFo")).value;

    var idRent = this.idZaBrzuRezervaciju;
    var email = '';
    //console.log(destinacijaNazivFo);
    var rez = new BrzaRezervacijaLetova(0,idRent,+destinacijaNazivFo,email,+popustFo,0,0,pocetniDatFo,krajnjiDatFo,[]);

    this.brzaRezLetService.dodajBrzuRez(rez).subscribe(
      (res: any) => {

        if (res != null ) {
 
        }

      }
    );
  } 

  ucitajSveBrzeRezervacije(){
   
    this.brzaRezLetService.ucitajSveBrzeRez().subscribe(
    (res: any) => {
      if (res != null) {

        this.brzaRez =  new Array<BrzaRezervacijaLetova>();  

        res.forEach(element => {

          element.krajnjiDatum =  element.krajnjiDatum.split('T')[0];
          element.pocetniDatum =  element.pocetniDatum.split('T')[0];
          this.brzaRez.push(element);
          
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
