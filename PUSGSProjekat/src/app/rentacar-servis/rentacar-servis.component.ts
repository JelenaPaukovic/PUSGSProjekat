import { Component, OnInit } from '@angular/core';
import { Rentacar } from 'src/app/entities/rentacar/rentacar';
import { RentacarService } from '../services/rentacar/rentacar.service';

@Component({
  selector: 'app-rentacar-servis',
  templateUrl: './rentacar-servis.component.html',
  styleUrls: ['./rentacar-servis.component.css']
})
export class RentacarServisComponent implements OnInit {

  allRentacar: Array<Rentacar>;

  

  constructor(private rentacarService: RentacarService) {
    
    this.allRentacar = new Array<Rentacar>();
    
  }


  ngOnInit(): void {
    this.ucitavanjeRentacar();
  }


  ucitavanjeRentacar(): void {
    this.allRentacar = this.rentacarService.ucitavanjeRentacar();
  }

}
