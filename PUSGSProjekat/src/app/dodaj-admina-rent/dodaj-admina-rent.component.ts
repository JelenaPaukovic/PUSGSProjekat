import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodaj-admina-rent',
  templateUrl: './dodaj-admina-rent.component.html',
  styleUrls: ['./dodaj-admina-rent.component.css']
})
export class DodajAdminaRentComponent implements OnInit {

  rentAdminForma :FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  private initForm() {
    this.rentAdminForma = new FormGroup({
      
      'ime': new FormControl('ime', Validators.required),
      'prezime': new FormControl('prezime', Validators.required),
      'grad': new FormControl('grad', Validators.required),
      'brTel': new FormControl('brTel', Validators.required),
      'email': new FormControl('email', Validators.required),
      'lozinka': new FormControl('lozinka', Validators.required),
      'lozinkaOpet': new FormControl('lozinkaOpet', Validators.required)
      
    });
  }

  onSubmit() {
    console.log(this.rentAdminForma.value);
    console.log(this.rentAdminForma);
  }

  onClear() {
    this.rentAdminForma.reset();
  }

}
