import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { stringify } from 'querystring';
import { ActivatedRouteSnapshot } from '@angular/router';

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
    
    return this.http.post(this.BaseURI + '/RentacarServis/AddServis', body);
  }


  comparePasswordsAdmin(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');}

  formModel2 = this.fb.group({
    ime: ['', Validators.required],
    prezime: ['', Validators.required],
    grad: ['', Validators.required],
    brTel: ['', Validators.required],
    email: ['', Validators.email],
    Lozinke: this.fb.group({
      lozinka: ['', [Validators.required, Validators.minLength(4)]],
      ponovoLozinka: ['', Validators.required]
    }, { validator: this.comparePasswordsAdmin })

  });

    dodajAdminaRent() {
      var body = {
        ime: this.formModel2.value.ime,
        prezime: this.formModel2.value.prezime,
        grad: this.formModel2.value.grad,
        brTel: this.formModel2.value.brTel,
        email: this.formModel2.value.email,
        lozinka: this.formModel2.value.Lozinke.lozinka
      };
      return this.http.post(this.BaseURI + '/ApplicationUser/DodajAdminaRent', body);
    }
  


   comparePasswordsAdminAvio(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');}

  formModel3 = this.fb.group({
    ime: ['', Validators.required],
    prezime: ['', Validators.required],
    grad: ['', Validators.required],
    brTel: ['', Validators.required],
    email: ['', Validators.email],
    Lozinke: this.fb.group({
      lozinka: ['', [Validators.required, Validators.minLength(4)]],
      ponovoLozinka: ['', Validators.required]
    }, { validator: this.comparePasswordsAdminAvio })

  });




    dodajAdminaAvio() {
      var body = {
        ime: this.formModel3.value.ime,
        prezime: this.formModel3.value.prezime,
        grad: this.formModel3.value.grad,
        brTel: this.formModel3.value.brTel,
        email: this.formModel3.value.email,
        lozinka: this.formModel3.value.Lozinke.lozinka
      };
      return this.http.post(this.BaseURI + '/ApplicationUser/DodajAdminaAvio', body);
    }
  

    getKorisnici(){
      return this.http.get(this.BaseURI + '/Korisnik/GetKorisnici');
    }


    updateServis(naziv, adresa, opis, cenovnik, spisak, filijale){
 
      var body = {
        naziv,
        adresa,
        opis,
        cenovnik,
        spisak,
        filijale,
      };
      return this.http.put(this.BaseURI + '/RentacarServis/UpdateServis', body);
    }
  }