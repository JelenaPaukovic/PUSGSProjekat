import { NumberValueAccessor } from '@angular/forms';
import { Vozilo } from '../vozilo/vozilo';

export class RezervacijaVozila {
    id: number;
    idRentacar: number;
    idVozila: number;
    idKlijenta: string;
    cena: number;
    pocetniDatum: string;
    krajnjiDatum:string;
    vozilo:Vozilo;
    zavrseno:boolean;

    constructor(id:number, idRentacar: number, idVozila: number, idKlijenta: string, cena: number,pocetniDatum:string,krajnjiDatum:string,vozilo:Vozilo) {
        this.id = id;
        this.idRentacar = idRentacar;
        this.idVozila = idVozila;
        this.idKlijenta = idKlijenta;
        this.cena = cena;
        this.pocetniDatum = pocetniDatum;
        this.krajnjiDatum = krajnjiDatum;
        this.vozilo=vozilo;
    }

}