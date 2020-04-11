import { Component, OnInit } from '@angular/core';
import { Avio } from 'src/app/entities/avio';
import { AvioService } from '../services/avio.service';

@Component({
  selector: 'app-avio-servis',
  templateUrl: './avio-servis.component.html',
  styleUrls: ['./avio-servis.component.css']
})
export class AvioServisComponent implements OnInit {

  allAvio: Array<Avio>;

  constructor(private avioService: AvioService) { 
    this.allAvio=new Array<Avio>();
  }

  ngOnInit(): void {
  }

  ucitavanjeAvio(): void {
    this.allAvio = this.avioService.ucitavanjeAvio();
  }

}







