import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistracijaKorisnikaComponent } from './registracija-korisnika/registracija-korisnika.component';
import { PrijavaKorisnikaComponent } from './prijava-korisnika/prijava-korisnika.component';
import { RentacarServisComponent } from './rentacar-servis/rentacar-servis.component';
import { AvioServisComponent } from './avio-servis/avio-servis.component';
import { RentacarPodaciComponent } from './rentacar-podaci/rentacar-podaci.component';
import { PrelazComponent } from './prelaz/prelaz.component';
import { AvioDodajComponent } from './avio-dodaj/avio-dodaj.component';
import { RentacarDodajComponent } from './rentacar-dodaj/rentacar-dodaj.component';
import { DodajAdminaRentComponent } from './dodaj-admina-rent/dodaj-admina-rent.component';
import { DodajAdminaAvioComponent } from './dodaj-admina-avio/dodaj-admina-avio.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/reactive",
    pathMatch: 'full'
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
    path: "rentacar-servis",
    component: RentacarServisComponent
  },
  {
    path: "avio-servis",
    component: AvioServisComponent
  },

  {
    path: "rentacar-servis",
    children: [{ path: "", component: RentacarServisComponent },
    { path: ":naziv/rentacar-podaci", component: RentacarPodaciComponent }]
  },

  {
    path: "prelaz",
    component: PrelazComponent
  },

  {
    path: "avio-dodaj",
    component: AvioDodajComponent
  },

  {
    path: "rentacar-dodaj",
    component: RentacarDodajComponent
  },

  {
    path: "dodaj-admina-rent",
    component: DodajAdminaRentComponent
  },

  {
    path: "dodaj-admina-avio",
    component: DodajAdminaAvioComponent
  },

  {
    path: "rentacar-servis",
    children: [{ path: "", component: RentacarServisComponent },
    { path: ":naziv/rentacar-podaci", component: RentacarPodaciComponent }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
