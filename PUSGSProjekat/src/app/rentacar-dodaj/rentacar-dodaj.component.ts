import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rentacar-dodaj',
  templateUrl: './rentacar-dodaj.component.html',
  styleUrls: ['./rentacar-dodaj.component.css']
})
export class RentacarDodajComponent implements OnInit {

  rentacarForma :FormGroup;

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  private initForm() {
    this.rentacarForma = new FormGroup({
      
      'naziv': new FormControl('naziv', Validators.required),
      'adresa': new FormControl('adresa', Validators.required),
      
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
    this.rentacarForma.reset();
  }


}
