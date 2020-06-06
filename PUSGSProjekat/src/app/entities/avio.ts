export class Avio{

    id: number;
    naziv: string;
    adresa: string
    opis: string;
    destinacije: string
    letovi: string
    spisak: string;
    mesta: string;
    cenovnik: number;

    constructor(id: number=0, naziv: string, adresa: string, opis:string, destinacije: string,letovi: string, spisak: string,mesta: string, filijale: string, cenovnik: number=0){
        this.id = id;
        this.naziv = naziv;
        this.adresa = adresa;
        this.opis = opis;
        this.destinacije = destinacije;
        this.letovi = letovi;
        this.spisak = spisak;
        this.mesta = mesta;
        this.cenovnik = cenovnik;
    }

}