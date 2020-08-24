import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik/user.service';
//import { ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dodaj-admina-avio',
  templateUrl: './dodaj-admina-avio.component.html',
  styleUrls: ['./dodaj-admina-avio.component.css']
})
export class DodajAdminaAvioComponent implements OnInit {

  avioAdminForma :FormGroup;

  constructor(public service: UserService, private toastr: ToastrService) { }

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
    this.service.dodajAdminaAvio().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel3.reset();
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
    this.avioAdminForma.reset();
  }


}
