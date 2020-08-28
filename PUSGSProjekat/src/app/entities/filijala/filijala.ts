import { NumberValueAccessor } from '@angular/forms';
import { Rentacar } from '../rentacar/rentacar';

export class Filijala {
    id: number;
    ulica: string;
    broj: number;
    mesto: string;
    rentacarId:number;

    constructor(id:number, ulica: string, broj: number, mesto: string) {
        this.id = id;
        this.ulica = ulica;
        this.broj = broj;
        this.mesto = mesto;
    }


}