import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-avio-dodaj',
  templateUrl: './avio-dodaj.component.html',
  styleUrls: ['./avio-dodaj.component.css']
})
export class AvioDodajComponent implements OnInit {

  avioForma :FormGroup;

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  private initForm() {
    this.avioForma = new FormGroup({
      
      'naziv': new FormControl('naziv', Validators.required),
      'adresa': new FormControl('adresa', Validators.required),
      
    });
  }

  onSubmit() {
    //console.log(this.avioForma.value);
    //console.log(this.avioForma);
    console.log('dodavanje...');
    this.service.addServis().subscribe(
      (res: any) => {
        if (res.succeeded) {
          console.log('ispisi nesto');
          this.service.formModel1.reset();
          this.toastr.success('New service created successful.');
        
        }
        console.log('avio');
      },
      
     /* err => {
        console.log(err);
      }*/
    );
  }

  onClear() {
    this.avioForma.reset();
  }
}
