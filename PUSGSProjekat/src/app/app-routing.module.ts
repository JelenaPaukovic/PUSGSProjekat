import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { TemplateFormComponent } from './template-form/template-form.component';
import { RegistracijaKorisnikaComponent } from './registracija-korisnika/registracija-korisnika.component';
import { PrijavaKorisnikaComponent } from './prijava-korisnika/prijava-korisnika.component';
import { RentacarServisComponent } from './rentacar-servis/rentacar-servis.component';
import { AvioServisComponent } from './avio-servis/avio-servis.component';

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
    path: "reactive",
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
