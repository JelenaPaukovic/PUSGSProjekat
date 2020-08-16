import {NumberValueAccessor} from '@angular/forms';

export class BrzaRezervacijaLetova {
    idRez:number;
    idAvioKompanije:number;
    idLeta:number;
    idKlijenta:string;
    novaCena:number;
    pocetnaCena:number;
    popust:number;
    pocetniDatum:string;
    krajnjiDatum:string;
    redVerzija:any[];

    constructor(idRez:number, idAvioKompanije:number, idLeta:number, idKlijenta:string, novaCena:number, pocetnaCena:number, popust:number, pocetniDatum:string, krajnjiDatum:string, redVerzija:any[]) {
        this.idRez=idRez;
        this.idAvioKompanije=idAvioKompanije;
        this.idLeta=idLeta;
        this.idKlijenta=idKlijenta;
        this.novaCena=novaCena;
        this.pocetnaCena=pocetnaCena;
        this.popust=popust;
        this.pocetniDatum=pocetniDatum;
        this.krajnjiDatum=krajnjiDatum;
        this.redVerzija=redVerzija;
    }
}