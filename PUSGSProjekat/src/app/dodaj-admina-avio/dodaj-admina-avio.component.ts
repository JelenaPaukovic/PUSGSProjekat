import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodaj-admina-avio',
  templateUrl: './dodaj-admina-avio.component.html',
  styleUrls: ['./dodaj-admina-avio.component.css']
})
export class DodajAdminaAvioComponent implements OnInit {

  avioAdminForma :FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  private initForm() {
    this.avioAdminForma = new FormGroup({
      
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
    console.log(this.avioAdminForma.value);
    console.log(this.avioAdminForma);
  }

  onClear() {
    this.avioAdminForma.reset();
  }


}
