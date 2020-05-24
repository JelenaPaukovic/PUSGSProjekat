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
    console.log('dodavanje...');
    this.service.addServis().subscribe(
      (res: any) => {
        if (res.succeeded) {
          console.log('ispisi nesto');
          this.service.formModel1.reset();
          this.toastr.success('New service created successful.');
        
        }
        console.log('rentacar');
      },
      
     /* err => {
        console.log(err);
      }*/
    );
  }


  onClear() {
    this.rentacarForma.reset();
  }


}
