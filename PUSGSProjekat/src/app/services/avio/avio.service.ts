import { Injectable } from '@angular/core';
import {Avio} from '../../entities/avio/avio';
import {AbstractFilterParam} from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import {StringFilterParam} from 'src/app/entities/string-filter-param/string-filter-param';
import {NumberFilterParam} from 'src/app/entities/number-filter-param/number-filter-param';
import {FilterParam} from 'src/app/entities/filter-param/filter-param';
import {Letovi} from 'src/app/entities/letovi/letovi';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AvioService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  formModel = this.fb.group({
    naziv: [''],
    adresa: [''],
    admin: [''],
  });

  dodaj() {
    var body={
      Naziv: this.formModel.value.naziv,
      //GradAvioKompanije: this.formModel.value.adresa,
      Adresa: this.formModel.value.adresa,
      Admin: this.formModel.value.admin,
      Odobreno: false
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/Aviokompanija/AddKompanija', body);
  }

  odobri(id:number){
    console.log(id);
    return this.http.get(this.BaseURI + 'Aviokompanija/OdobriKomapanija' + id);
  }

  loadAvio(){
    console.log('Ucitavanje avio-komapnija...');
    return this.mockedAvio();
  }

  filterAvio(allAvio: Avio[], filterParams: AbstractFilterParam[]): Avio[] {
    let filteredAvio = new Array<Avio>();
    for (const avio of allAvio){
      let addKompanija= true;
      for (const filterParam of filterParams){
        if(this.checkAirCompaniesBrandFilter(avio, filterParam)){
          addKompanija=false;
            console.log(avio.naziv + ' ' + avio.adresa + ' ne zadovoljava vrednost polja avioBrandFIlter');
            break;
        }

        if(this.checkAirCompaniesMaxPerDayPriceFilter(avio, filterParam)){
          addKompanija=false;
          console.log(avio.naziv + ' ' + avio.adresa + ' ne zadovoljava vredsnost polja checkAirCompanyMaxPerDayPriceFIlter');
          break;
        }
      }

      if(addKompanija)
        filteredAvio.push(avio);
    }
    return filteredAvio;
  }

  checkAirCompaniesBrandFilter(avio: Avio, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'avioBrandFilter' && !avio.naziv.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkAirCompaniesMaxPerDayPriceFilter(avio: Avio, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof NumberFilterParam && filterParam.getFilterParamName() === 'avioMaxPerDayPriceFilter' && (avio.idAvio < filterParam.getFilterParamValue());
  }

  izmeniAvio(servis: Avio){
    return this.http.post(this.BaseURI + '/Aviokomapnija/UpdateKompanija', servis);
  }

  ucitajAdminAvio(){
    return this.http.get('https://localhost:44308/api' + 'ApplicationUser/GetAdminAvio');
  }

  ucitajAvio() {
    //console.log('Učitavanje avio servisa...');
    //return this.mockedAvio();
    let allAvio=new Array<Avio>();
    var array=this.http.get<Avio[]>(this.BaseURI + 'Avio');
    return array;
  }

  ucitajOdredjenuAvio(id:Number){
    return this.http.get<Avio>(this.BaseURI + '/Aviokpmapnija/' + id);
  }

  ucitajAvioOdobrene(){
    var array=this.http.get<Avio[]>(this.BaseURI + '/Aviokomapnija/GetAviokompanijaOdobreno');
    return array;
  }

  pretrazi(naziv: string, datumOd:String, datumDo:string){
    var body = {
      Naziv:naziv,
      DatumOd:datumOd,
      DatumDo:datumDo
    };
    console.log(body);
    return this.http.put(this.BaseURI + '/Aviokompanija/PretragaAviokomapnija', body);
  }

  ucitajAvioZaAdmina(id:string){
    return this.http.get<Avio>(this.BaseURI + '/Aviokompanija/GetAviokompanijaZaAdmina/' + id);
  }


  mockedAvio(): Array<Avio> {
    let allAvio = new Array<Avio>();

    /*const av1 = new Avio('Air Serbia', 'Beograd, Srbija', 5, 'Letite udobno i bezbedno', 'Cenovnik', 'Spisak', 'Filijale');
    const av2 = new Avio('Turkish Airlines', 'Istanbul, Turska', 5, 'Prosiri svoj svet', 'Cenovnik', 'Spisak', 'Filijale');
    const av3 = new Avio('Ryanair', 'Dablin, Irska', 5, 'Preletite svet sa nama', 'Cenovnik', 'Spisak', 'Filijale');
    const av4 = new Avio('Flydubai','Dubai, Ujedinjeni Arapski Emirati', 5, 'Letite sa uzivanjem', 'Cenovnik', 'Spisak', 'Filijale');
    const av5 = new Avio('easyJet','London, Velika Britanija', 5, 'Letite jeftino i sigurno', 'Cenovnik', 'Spisak', 'Filijale');
    
    
   

    allAvio.push(av1);
    allAvio.push(av2);
    allAvio.push(av3);
    allAvio.push(av4);
    allAvio.push(av5);*/

    return allAvio;
  }

  mockedLetovi(): Array<Letovi> {
    let allLetovi=new Array<Letovi>();
    return allLetovi;
  }

}