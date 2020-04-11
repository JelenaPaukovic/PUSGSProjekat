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

    constructor(naziv: string, adresa: string, ocena: number = 0){
        this.naziv = naziv;
        this.adresa = adresa;
        this.ocena = ocena;
    }

}
