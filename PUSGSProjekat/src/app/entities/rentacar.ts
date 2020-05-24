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

    /*naziv: string;
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
    }*/

    id: number;
    naziv: string;
    adresa: string;
    opis: string;
    cenovnik: number;
   

    constructor(id: number=0, naziv: string, adresa: string,  opis:string, cenovnik: number=0){
       this.id = id;
        this.naziv = naziv;
        this.adresa = adresa;
        this.cenovnik = cenovnik;
        this.opis = opis;
        
        
    }

}
