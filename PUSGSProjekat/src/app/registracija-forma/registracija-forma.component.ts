import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik-service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registracija-forma',
  templateUrl: './registracija-forma.component.html',
  styleUrls: ['./registracija-forma.component.css']
})
export class RegistracijaFormaComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }
  //constructor() { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onClear() {
    this.service.formModel.reset();
  }

  /*
  onSubmit() {
    console.log(this.registracijaForma.value);
    console.log(this.registracijaForma);
  }
  */

  onSubmit() {
      this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          console.log('Uspesno ste registrovali');
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


}
