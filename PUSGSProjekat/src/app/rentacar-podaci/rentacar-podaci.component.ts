import { Component, OnInit } from '@angular/core';
import { Rentacar } from 'src/app/entities/rentacar/rentacar';
import { RentacarService } from '../services/rentacar/rentacar.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { UserService } from 'src/app/services/korisnik/user.service';
import { element } from 'protractor';

@Component({
  selector: 'app-rentacar-podaci',
  templateUrl: './rentacar-podaci.component.html',
  styleUrls: ['./rentacar-podaci.component.css']
})
export class RentacarPodaciComponent implements OnInit {

  allRentacarPodaci: Array<Rentacar>;
  servis: Rentacar;
  naziv: string;
  noviServis;


  constructor(private rentacarService: RentacarService, private route:ActivatedRoute, private service: UserService) {
    
    this.allRentacarPodaci = new Array<Rentacar>();
    route.params.subscribe( params => {this.naziv = params['naziv'];});
    
  }

  ngOnInit(): void {
    this.ucitavanjeRentacar();
    
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


}
