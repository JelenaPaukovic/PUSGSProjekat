import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistracijaKorisnikaComponent } from './registracija-korisnika/registracija-korisnika.component';
import { PrijavaKorisnikaComponent } from './prijava-korisnika/prijava-korisnika.component';
import { RentacarServisComponent } from './rentacar-servis/rentacar-servis.component';
import { AvioServisComponent } from './avio-servis/avio-servis.component';
import { RentacarPodaciComponent } from './rentacar-podaci/rentacar-podaci.component';
import { AvioPodaciComponent } from './avio-podaci/avio-podaci.component';
import { PrelazComponent } from './prelaz/prelaz.component';
import { AvioDodajComponent } from './avio-dodaj/avio-dodaj.component';
import { RentacarDodajComponent } from './rentacar-dodaj/rentacar-dodaj.component';
import { DodajAdminaRentComponent } from './dodaj-admina-rent/dodaj-admina-rent.component';
import { DodajAdminaAvioComponent } from './dodaj-admina-avio/dodaj-admina-avio.component';
import { HomeComponent } from './home/home.component';
import { ProfilAvioAdminaComponent } from './profil-avio-admina/profil-avio-admina.component';
import { ProfilKorisnikaComponent } from './profil-korisnika/profil-korisnika.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminRegistracijaComponent } from './admin-registracija/admin-registracija.component';
import { AppComponent } from './app.component';
import { ProfilRentacarAdminaComponent } from './profil-rentacar-admina/profil-rentacar-admina.component';
import { IzvestajRentacarComponent } from './izvestaj-rentacar/izvestaj-rentacar.component';
import {HomepageFormaComponent} from './homepage-forma/homepage-forma.component';
import {AdminSistemComponent} from './admin-sistem/admin-sistem.component';


const routes: Routes = [
  {
    path: "pocetna",
    component : NavbarComponent
  
  },
  
  {
    path: "prijava",
    component: PrijavaKorisnikaComponent
  },

  {
    path: "registracija",
    component: RegistracijaKorisnikaComponent
  },

  {
    path: "registracijaAdmin",
    component: AdminRegistracijaComponent
  },

  {
    path: "pocetna",
    component: AppComponent
  },


  {
    path: "dodaj-avio",
    component: AvioDodajComponent
  },
  {
    path: "dodaj-rentacar",
    component: RentacarDodajComponent
  },
  {
    path: "profil",
    component: AdminSistemComponent
  },
  /*{
    path: "rentacar-servis",
    component: RentacarServisComponent
  },
  {
    path: "avio-servis",
    component: AvioServisComponent
  },*/

  {
    path: "rentacar-servis",
    children: [{ path: "", component: RentacarServisComponent },
    { path: ":id/rentacar-podaci", component: RentacarPodaciComponent }]
  },

  {
    path: "avio-servis",
    children: [{ path: "", component: AvioServisComponent },
    { path: ":id/avio-podaci", component: AvioPodaciComponent }]
  },

  /*{
    path: "prelaz",
    component: PrelazComponent
  },*/

  /*{
    path: "avio-dodaj",
    component: AvioDodajComponent
  },

  {
    path: "rentacar-dodaj",
    component: RentacarDodajComponent
  },

 /* {
    path: "dodaj-admina-rent",
    component: DodajAdminaRentComponent
  },

  {
    path: "dodaj-admina-avio",
    component: DodajAdminaAvioComponent
  },*/
  {
    path: "profilRentAdmina",
   // component: RentAdminProfilComponent,
   children: [
    { path: "", component: ProfilRentacarAdminaComponent },
    { path: ":id/izvestaj", component: IzvestajRentacarComponent },
  ]
  },

  {
    path: "rentacar-servis",
    children: [{ path: "", component: RentacarServisComponent },
    { path: ":id/rentacar-podaci", component: RentacarPodaciComponent }]
  },
  {
    path: "avio-servis",
    children: [{ path: "", component: AvioServisComponent },
    { path: ":id/avio-podaci", component: AvioPodaciComponent }]
  },
  {
    path: "profilAdminAvio",
    children:[
      { path: "", component: ProfilAvioAdminaComponent},
      { path: "profilKorisnika", component: ProfilKorisnikaComponent},
      { path: "avio", component: ProfilAvioAdminaComponent},
      ]

  },

  {
    path: "homepage-forma",
    children:[
      { path: "", component: HomepageFormaComponent},
      { path: "profilKorisnika", component: ProfilKorisnikaComponent},
      { path: "avio-servis", component: AvioServisComponent},
      { path: "rentacar-servis", component: RentacarServisComponent},
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
