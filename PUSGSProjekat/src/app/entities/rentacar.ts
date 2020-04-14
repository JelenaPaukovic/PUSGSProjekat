/*export class Rentacar {
   
    naziv: string;
    adresa: string;
    ocena: number;

    constructor(ocena: number = 0, naziv: string, adresa: string) {
        this.ocena = ocena;
        this.naziv = naziv;
        this.adresa = adresa;
        
    }

    
}*/

export class Rentacar{

    naziv: string;
    adresa: string;
    ocena: number;
    opis: string;
    cenovnik: string;
    spisak: string;
    filijale: string;

    constructor(naziv: string, adresa: string, ocena: number = 0, opis:string, cenovnik: string, spisak: string, filijale: string){
        this.naziv = naziv;
        this.adresa = adresa;
        this.ocena = ocena;
        this.opis = opis;
        this.cenovnik = cenovnik;
        this.spisak = spisak;
        this.filijale = filijale;
    }

}
