import {NumberValueAccessor}from '@angular/forms';
import {Letovi}from 'src/app/entities/letovi/letovi'


export class Avio{

    idAvio: number;
    naziv: string;
    adresa: string
    promotivniOpis: string;
    destinacijePoslovanja:string;
    letovi: string
    spisakKarataSaPopustom: string;
    konfSegmenataIMesta: string;
    cenovnik: string;
    infoPrtljag:string;
    cenaPrviDan:number;
    cenaSledeciDan:number;
    odobreno:boolean;
    admin:string;
    destinacije: Array<Letovi>;

    constructor(idAvio: number, naziv: string, adresa: string, promotivniOpis: string, destinacijePoslovanja:string,letovi: string, spisakKarataSaPopustom: string, konfSegmenataIMesta: string, cenovnik: string, infoPrtljag:string, admin:string){
        this.idAvio = idAvio;
        this.naziv = naziv;
        this.adresa = adresa;
        this.promotivniOpis = promotivniOpis;
        this.destinacijePoslovanja = destinacijePoslovanja;
        this.letovi = letovi;
        this.spisakKarataSaPopustom = spisakKarataSaPopustom;
        this.konfSegmenataIMesta = konfSegmenataIMesta;
        this.cenovnik = cenovnik;
        this.infoPrtljag=infoPrtljag;
        this.admin=admin;
        this.destinacije=new Array<Letovi>();
    }

}