import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik/user.service';
//import { ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import {RentacarService} from 'src/app/services/rentacar/rentacar.service';

@Component({
  selector: 'app-dodaj-admina-rent',
  templateUrl: './dodaj-admina-rent.component.html',
  styleUrls: ['./dodaj-admina-rent.component.css']
})
export class DodajAdminaRentComponent implements OnInit {

  rentAdminForma :FormGroup;

  constructor(public service: RentacarService, private toastr: ToastrService) { }
  

  ngOnInit(): void {
  }

  private initForm() {
    this.rentAdminForma = new FormGroup({
      
      'ime': new FormControl('ime', Validators.required),
      'prezime': new FormControl('prezime', Validators.required),
      'grad': new FormControl('grad', Validators.required),
      'telefon': new FormControl('telefon', Validators.required),
      'email': new FormControl('email', Validators.required),
      'lozinka': new FormControl('lozinka', Validators.required),
      'lozinkaOpet': new FormControl('lozinkaOpet', Validators.required)
      
    });
  }

 onSubmit() {
  /*  this.service.dodajAdminaRent().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;

              default:
              this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );*/
  }






  onClear() {
    this.rentAdminForma.reset();
  }

}
