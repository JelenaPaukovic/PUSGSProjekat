import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-avio-dodaj',
  templateUrl: './avio-dodaj.component.html',
  styleUrls: ['./avio-dodaj.component.css']
})
export class AvioDodajComponent implements OnInit {

  avioForma :FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  private initForm() {
    this.avioForma = new FormGroup({
      
      'naziv': new FormControl('naziv', Validators.required),
      'adresa': new FormControl('adresa', Validators.required),
      
    });
  }

  onSubmit() {
    console.log(this.avioForma.value);
    console.log(this.avioForma);
  }

  onClear() {
    this.avioForma.reset();
  }
}
