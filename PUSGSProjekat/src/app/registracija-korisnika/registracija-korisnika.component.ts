import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registracija-korisnika',
  templateUrl: './registracija-korisnika.component.html',
  styleUrls: ['./registracija-korisnika.component.css']
})
export class RegistracijaKorisnikaComponent implements OnInit {

  registracijaForma: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.registracijaForma = new FormGroup({
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
    console.log(this.registracijaForma.value);
    console.log(this.registracijaForma);
  }

  onClear() {
    this.registracijaForma.reset();
  }

}
