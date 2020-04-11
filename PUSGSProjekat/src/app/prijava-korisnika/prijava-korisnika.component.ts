import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prijava-korisnika',
  templateUrl: './prijava-korisnika.component.html',
  styleUrls: ['./prijava-korisnika.component.css']
})
export class PrijavaKorisnikaComponent implements OnInit {

  prijavaForma :FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  private initForm() {
    this.prijavaForma = new FormGroup({
      
      'email': new FormControl('email', Validators.required),
      'lozinka': new FormControl('lozinka', Validators.required),
      
    });
  }

  onSubmit() {
    console.log(this.prijavaForma.value);
    console.log(this.prijavaForma);
  }

  onClear() {
    this.prijavaForma.reset();
  }

}
