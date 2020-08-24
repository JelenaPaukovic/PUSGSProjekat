import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik/user.service';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  formModel = {
    StaraLozinka: '',
    NovaLozinka: ''
  }

  onSubmit(form: NgForm) {
    
    this.service.promeniLozinku(this.formModel.StaraLozinka,this.formModel.NovaLozinka).subscribe(
      (res: any) => {
        localStorage.setItem("sifraIzmenjena","true");
      },
      err => {
        
      }
    );
  }

}
