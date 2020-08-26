import { NumberValueAccessor} from '@angular/forms';

export class Letovi{
    idLet:number;
    nazivDestinacije:string;
    datumIVremePoletanja:string;
    datumIVremeSletanja:string;
    vremePutovanja:string;
    duzinaPutovanja:string;
    brojPresedanja:number;
    lokacijaPresedanja:string;
    cenaKarte:string;
    idAvioKompanije:number;

    constructor(idLet:number, nazivDestinacije:string, datumIVremePoletanja:string, datumIVremeSletanja:string, vremePutovanja:string, duzinaPutovanja:string, brojPresedanja:number, lokacijaPresedanja:string, cenaKarte:string /*idAvioKompanije:number*/){
        this.idLet=idLet;
        this.nazivDestinacije=nazivDestinacije;
        this.datumIVremePoletanja=datumIVremePoletanja;
        this.datumIVremeSletanja=datumIVremeSletanja;
        this.vremePutovanja=vremePutovanja;
        this.duzinaPutovanja=duzinaPutovanja;
        this.brojPresedanja=brojPresedanja;
        this.lokacijaPresedanja=lokacijaPresedanja;
        this.cenaKarte=cenaKarte;
        //this.idAvioKompanije=idAvioKompanije;
    }
}