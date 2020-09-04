import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registracija-korisnika',
  templateUrl: './registracija-korisnika.component.html',
  styleUrls: ['./registracija-korisnika.component.css']
})
export class RegistracijaKorisnikaComponent implements OnInit {

  

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

 

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          console.log('Uspesno ste registrovali!');
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
        console.log('greska');
        console.log(err);
      }
    );
  }

  onClear() {
    this.service.formModel.reset();
  }

}
