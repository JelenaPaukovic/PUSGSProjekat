import { Component, OnInit } from '@angular/core';
import { Rentacar } from 'src/app/entities/rentacar';
import { RentacarService } from '../services/rentacar.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-rentacar-podaci',
  templateUrl: './rentacar-podaci.component.html',
  styleUrls: ['./rentacar-podaci.component.css']
})
export class RentacarPodaciComponent implements OnInit {

  allRentacarPodaci: Array<Rentacar>;
  servis: Rentacar;
  naziv: string;

  

  

  constructor(private rentacarService: RentacarService, private route:ActivatedRoute) {
    
    this.allRentacarPodaci = new Array<Rentacar>();
    route.params.subscribe( params => {this.naziv = params['naziv'];});
    
    
    
  }


  ngOnInit(): void {
    this.ucitavanjeRentacar();
  }


  ucitavanjeRentacar(): void {
    this.allRentacarPodaci = this.rentacarService.ucitavanjeRentacar();
    this.allRentacarPodaci.forEach(element =>{
      if(element.naziv = this.naziv){
        this.servis = element;

      }
    })
  }


}
