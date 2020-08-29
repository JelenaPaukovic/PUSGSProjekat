import {NumberValueAccessor} from '@angular/forms';
import {Letovi} from '../letovi/letovi';

export class RezervacijaLetova{
    id:number;
    idAvioKompanije:number;
    idLeta:number;
    idKlijenta:string;
    cena:number;
    pocetniDatum:string;
    krajnjiDatum:string;
    destinacija:Letovi;
    zavrseno:boolean;

    constructor(id:number, idAvioKompanije:number, idLeta:number, idKlijenta:string, cena:number, pocetniDatum:string, krajnjiDatum:string, destinacija:Letovi) {
        this.id=id;
        this.idAvioKompanije=idAvioKompanije;
        this.idLeta=idLeta;
        this.idKlijenta=idKlijenta;
        this.cena=cena;
        this.pocetniDatum=pocetniDatum;
        this.krajnjiDatum=krajnjiDatum;
        this.destinacija=destinacija;
    }


}