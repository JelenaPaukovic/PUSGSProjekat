import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registracija-korisnika',
  templateUrl: './registracija-korisnika.component.html',
  styleUrls: ['./registracija-korisnika.component.css']
})
export class RegistracijaKorisnikaComponent implements OnInit {

  registracijaForma: FormGroup;

  constructor(public service: UserService, private toastr: ToastrService) { }

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
    this.service.register().subscribe(
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
    );
  }

  onClear() {
    this.registracijaForma.reset();
  }

}
