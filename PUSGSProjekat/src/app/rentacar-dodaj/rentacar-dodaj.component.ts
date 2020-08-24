import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rentacar-dodaj',
  templateUrl: './rentacar-dodaj.component.html',
  styleUrls: ['./rentacar-dodaj.component.css']
})
export class RentacarDodajComponent implements OnInit {

  public listItems: Array<string> = [];

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ucitajAdmine();
  }



  onClear() {
    this.service.formModel.reset();
  }

  
  ucitajAdmine(){
    this.service.ucitajAdmineRent().subscribe(
    (res: any) => {
      if (res != null) {

        console.log(res);

        res.forEach(element => {

          var s = element.userName;
          this.listItems.push(s);
          
        });
        
       
      } else {
        res.errors.forEach(element => {
          switch (element.code) {
            default:
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


  


}
