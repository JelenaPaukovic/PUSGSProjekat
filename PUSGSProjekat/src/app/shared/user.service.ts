import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44330/api';

  formModel = this.fb.group({
    ime: ['', Validators.required],
    prezime: ['', Validators.required],
    grad: ['', Validators.required],
    brTel: ['', Validators.required],
    email: ['', Validators.email],
    Lozinke: this.fb.group({
      lozinka: ['', [Validators.required, Validators.minLength(4)]],
      ponovoLozinka: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
   /* if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }*/
  }

  register() {
    var body = {
      ime: this.formModel.value.ime,
      prezime: this.formModel.value.prezime,
      grad: this.formModel.value.grad,
      brTel: this.formModel.value.brTel,
      email: this.formModel.value.email,
      lozinka: this.formModel.value.Lozinke.lozinka
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  externalLogin(formData){
    return this.http.post(this.BaseURI + '/ApplicationUser/SocialLogin',formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile/GetUserProfile');
  }

  getServisi(){
    return this.http.get(this.BaseURI + '/RentacarServis/GetServisi');
  }

  formModel1 = this.fb.group({
    naziv: ['', Validators.required],
    adresa: ['', Validators.required],
   
  });

  addServis() {
    var body = {
      naziv: this.formModel1.value.naziv,
      adresa: this.formModel1.value.adresa,
     
    };
    console.log('nesto...');
    return this.http.post(this.BaseURI + '/RentacarServis/AddServis', body);
  }
  getAvio(){
    return this.http.get(this.BaseURI + '/Aviokompanija/GetAvio');
  }
  addAvio() {
    var body = {
      naziv: this.formModel1.value.naziv,
      adresa: this.formModel1.value.adresa,
     
    };
    console.log('nesto...');
    return this.http.post(this.BaseURI + '/Aviokompanija/AddAvio', body);
  }

}
