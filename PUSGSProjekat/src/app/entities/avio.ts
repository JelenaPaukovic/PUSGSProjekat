export class Avio{

    naziv: string;
    adresa: string;
    ocena: number;

    constructor(naziv: string, adresa: string, ocena: number = 0){
        this.naziv = naziv;
        this.adresa = adresa;
        this.ocena = ocena;
    }

}