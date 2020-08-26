import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik/user.service';
import { ToastrService } from 'ngx-toastr';
import { AvioService } from '../services/avio/avio.service';


@Component({
  selector: 'app-avio-dodaj',
  templateUrl: './avio-dodaj.component.html',
  styleUrls: ['./avio-dodaj.component.css']
})
export class AvioDodajComponent implements OnInit {

  public listItems: Array<string> = [];

  //avioForma :FormGroup;

  constructor(public service: AvioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.initForm();
    this.ucitajAdmine();
  }

  /*private initForm() {
    this.avioForma = new FormGroup({
      
      'naziv': new FormControl('naziv', Validators.required),
      'adresa': new FormControl('adresa', Validators.required),
      
    });
  }*/

  ucitajAdmine(){
    this.service.ucitajAdminAvio().subscribe(
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
    this.service.dodaj().subscribe(
      (res: any) => {
        console.log(res);
        if (res.id > 0) {
          this.service.formModel.reset();
          this.toastr.success('New rent-a-car servis created!', 'Registration successful.');
          console.log('Uspesno ste registrovali rent-a-car servis');
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
