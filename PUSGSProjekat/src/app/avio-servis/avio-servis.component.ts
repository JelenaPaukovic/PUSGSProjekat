import { Component, OnInit } from '@angular/core';
import { Avio } from 'src/app/entities/avio/avio';
import { AvioService } from '../services/avio/avio.service';
import {AbstractFilterParam} from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import {StringFilterParam} from 'src/app/entities/string-filter-param/string-filter-param';
import {NumberFilterParam} from 'src/app/entities/number-filter-param/number-filter-param';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Letovi} from 'src/app/entities/letovi/letovi';
import { LetoviService} from 'src/app/services/letovi/letovi.service';
import {ChartsModule, WavesModule} from 'angular-bootstrap-md';

@Component({
  selector: 'app-avio-servis',
  templateUrl: './avio-servis.component.html',
  styleUrls: ['./avio-servis.component.css']
})
export class AvioServisComponent implements OnInit {

  avioServisComponent: FormGroup

  allAvio: Array<Avio>;
  filteredAvio: Array<Avio>;

  constructor(private avioService: AvioService, private letoviService: LetoviService) { 
    this.allAvio= this.avioService.loadAvio();
    this.allAvio= new Array<Avio>();
    
  }

  ngOnInit(): void {
    this.ucitavanjeAvioService();
    this.filteredAvio=this.allAvio;
  }
  filterAvio() : void {
    let filterParam =  new Array<AbstractFilterParam>();
    if(this.getFilterFieldValue("avioBrandFilter")) {
      filterParam.push(this.addAvioBrandFilterParam());

    }
    if(this.getFilterFieldValue("avioMaxPerDayPriceFilter")){
      filterParam.push(this.addAvioMaxPerDayPriceFilterParam());
    }
    this.filteredAvio=this.avioService.filterAvio(this.allAvio, filterParam);
  }

  resetFilter() : void {
    this.filteredAvio= this.allAvio;
  }

  addAvioBrandFilterParam() : ReturnType<any>{
    return new StringFilterParam("avioBrandFilter", this.getFilterFieldValue("avioBrandFilter"));
  }
  addAvioMaxPerDayPriceFilterParam() : ReturnType<any> {
    return new NumberFilterParam("avioMaxPerDayPriceFilter", +this.getFilterFieldValue("avioMaxPerDayPriceFilter"));
 
  }
  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  ucitavanjeAvioService() {
    this.avioService.ucitajAvio().subscribe(
      (res: any) => {
        //console.log(res);
        if (res != null ) {
          var temp = res;
          temp.forEach(element => {
            
            const ak = new Avio(element.id, element.naziv, element.adresa, element.promotivniOpis, element.destinacijePoslovanja
              , element.letovi, element.spisakKarataSaPopustom, element.konfSegmenataIMesta, element.cenovnik, element.infoPrtljag, element.admin);
            console.log(element);
            if(ak.destinacije.length !=0)
            {
              console.log(ak.destinacije);
              ak.destinacije=element.destinacija;
            }
           
            this.allAvio.push(ak);
          });
  
          this.ucitavanjeLetovi();
  
        } else {
        }
      },
      err => {
        console.log('greska');
        console.log(err);
      }
      );
  }
  ucitavanjeLetovi() {
    this.letoviService.ucitajLetovi().subscribe(
      (res: any) => {
        res.forEach(element => {

          console.log(element);
          this.allAvio.forEach(item => {

            if(element.AvioID == item.idAvio)
            {
              item.destinacije.push(element);
            }

          });

        });
      }
      );

  }
  /*ucitavanjeAvio(): void {
    this.allAvio = this.avioService.ucitavanjeAvio();
  }*/

}







