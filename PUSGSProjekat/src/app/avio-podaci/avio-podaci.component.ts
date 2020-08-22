import { Component, OnInit } from '@angular/core';
import { Avio } from 'src/app/entities/avio/avio';
import { AvioService } from '../services/avio/avio.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';


@Component({
  selector: 'app-avio-podaci',
  templateUrl: './avio-podaci.component.html',
  styleUrls: ['./avio-podaci.component.css']
})
export class AvioPodaciComponent implements OnInit {

  allAvioPodaci: Array<Avio>;
  servis: Avio;
  naziv: string;

  constructor(private avioService: AvioService, private route:ActivatedRoute) {

    this.allAvioPodaci = new Array<Avio>();
    route.params.subscribe( params => {this.naziv = params['naziv'];});
   }

  ngOnInit(): void {
    this.ucitavanjeAvio();
  }

  ucitavanjeAvio(): void {
    this.allAvioPodaci = this.avioService.ucitavanjeAvio();
    this.allAvioPodaci.forEach(element =>{
      if(element.naziv = this.naziv){
        this.servis = element;

      }
    })
  }

}
