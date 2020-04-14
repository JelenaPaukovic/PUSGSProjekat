import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rentacar-dodaj',
  templateUrl: './rentacar-dodaj.component.html',
  styleUrls: ['./rentacar-dodaj.component.css']
})
export class RentacarDodajComponent implements OnInit {

  rentacarForma :FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  private initForm() {
    this.rentacarForma = new FormGroup({
      
      'naziv': new FormControl('naziv', Validators.required),
      'adresa': new FormControl('adresa', Validators.required),
      
    });
  }

  onSubmit() {
    console.log(this.rentacarForma.value);
    console.log(this.rentacarForma);
  }

  onClear() {
    this.rentacarForma.reset();
  }


}
