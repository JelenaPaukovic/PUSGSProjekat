import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './auth/tokenInterceptor';
import {animate, trigger, state, style, transition} from '@angular/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TemplateFormComponent } from './template-form/template-form.component';
import { RegistracijaKorisnikaComponent } from './registracija-korisnika/registracija-korisnika.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrijavaKorisnikaComponent } from './prijava-korisnika/prijava-korisnika.component';
import { RentacarServisComponent } from './rentacar-servis/rentacar-servis.component';
import { AvioServisComponent } from './avio-servis/avio-servis.component';
import { RentacarPodaciComponent } from './rentacar-podaci/rentacar-podaci.component';
import { PrelazComponent } from './prelaz/prelaz.component';
import { AvioDodajComponent } from './avio-dodaj/avio-dodaj.component';
import { RentacarDodajComponent } from './rentacar-dodaj/rentacar-dodaj.component';
import { DodajAdminaRentComponent } from './dodaj-admina-rent/dodaj-admina-rent.component';
import { DodajAdminaAvioComponent } from './dodaj-admina-avio/dodaj-admina-avio.component';
import { AvioPodaciComponent } from './avio-podaci/avio-podaci.component';
import { UserService } from 'src/app/services/korisnik/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { ProfilRentacarAdminaComponent } from './profil-rentacar-admina/profil-rentacar-admina.component';
import { DodajVoziloComponent } from './dodaj-vozilo/dodaj-vozilo.component';
import { ProfilAvioAdminaComponent } from './profil-avio-admina/profil-avio-admina.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RentacarFiltriranjeComponent } from './rentacar-filtriranje/rentacar-filtriranje.component';
import { AvioFilteredComponent } from './avio-filtered/avio-filtered.component';
import { IzvestajRentacarComponent } from './izvestaj-rentacar/izvestaj-rentacar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProfilKorisnikaComponent } from './profil-korisnika/profil-korisnika.component';
import { HomepageFormaComponent } from './homepage-forma/homepage-forma.component';
import { AdminRegistracijaComponent } from './admin-registracija/admin-registracija.component';
import { IzvestajAvioComponent } from './izvestaj-avio/izvestaj-avio.component';
//import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';  
import {AdminSistemComponent} from './admin-sistem/admin-sistem.component';
////import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angular-6-social-login';  
//import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login';  
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { PromeniLozinkuComponent } from './promeni-lozinku/promeni-lozinku/promeni-lozinku.component';
import { RentAdminProfilComponent } from './rent-admin-profil/rent-admin-profil/rent-admin-profil.component';
import { RentFilterdeComponent } from './rent-filterde/rent-filterde.component';
import { AvioProfilComponent } from './avio-profil/avio-profil.component';
import { DodajAkompFormaComponent } from './dodaj-akomp-forma/dodaj-akomp-forma.component';
import { AviokompanijePocetnaComponent } from './aviokompanije-pocetna/aviokompanije-pocetna.component';
import { AviokompanijeFilteredComponent } from './aviokompanije-filtered/aviokompanije-filtered.component';
import { PrijavaFormaComponent } from './prijava-forma/prijava-forma.component';
import { RentIzvestajComponent } from './rent-izvestaj/rent-izvestaj.component';
import { RegistracijaAdminComponent } from './registracija-admin/registracija-admin.component';
import { RentPocetnaComponent } from './rent-pocetna/rent-pocetna.component';
import { RentProfilComponent } from './rent-profil/rent-profil.component';
import { DodajRecarFormaComponent } from './dodaj-recar-forma/dodaj-recar-forma.component';
import { RegistracijaFormaComponent } from './registracija-forma/registracija-forma.component';
import { AdminSistemProfilComponent } from './admin-sistem-profil/admin-sistem-profil.component';
import { AvioPocetnaComponent } from './avio-pocetna/avio-pocetna.component';
//import { AuthServiceConfig } from 'angular-6-social-login';


/*export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('app -id')  
      },  
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('')  
      }  
    ]  
  );  
  return config;  
}  */

/*let config = new AuthServiceConfig([
  {
     id: GoogleLoginProvider.PROVIDER_ID,
     provider: new GoogleLoginProvider('219104745928-b057e5erdn5hs4b1bshsr8g42kgl7453.apps.googleusercontent.com')
  },
{
     id: FacebookLoginProvider.PROVIDER_ID,
     provider: new FacebookLoginProvider(Facebook AppId)
  },
]);
export function provideConfig()
 {
    return config;
 }*/



@NgModule({
  declarations: [
    AppComponent,
    RegistracijaKorisnikaComponent,
    NavbarComponent,
    PrijavaKorisnikaComponent,
    RentacarServisComponent,
    AvioServisComponent,
    RentacarPodaciComponent,
    PrelazComponent,
    AvioDodajComponent,
    RentacarDodajComponent,
    DodajAdminaRentComponent,
    DodajAdminaAvioComponent,
    AvioPodaciComponent,
    HomeComponent,
    ProfilRentacarAdminaComponent,
    DodajVoziloComponent,
    ProfilAvioAdminaComponent,
    PromenaLozinkeComponent,
    RentacarFiltriranjeComponent,
    AvioFilteredComponent,
    IzvestajRentacarComponent,
    ProfilKorisnikaComponent,
    HomepageFormaComponent,
    AdminRegistracijaComponent,
    IzvestajAvioComponent,
    AdminSistemComponent,
    PromeniLozinkuComponent,
    RentAdminProfilComponent,
    RentFilterdeComponent,
    AvioProfilComponent,
    DodajAkompFormaComponent,
    AviokompanijePocetnaComponent,
    AviokompanijeFilteredComponent,
    PrijavaFormaComponent,
    RentIzvestajComponent,
    RegistracijaAdminComponent,
    RentPocetnaComponent,
    RentProfilComponent,
    DodajRecarFormaComponent,
    RegistracijaFormaComponent,
    AdminSistemProfilComponent,
    AvioPocetnaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      //progressBar: true
    }),
    MDBBootstrapModule.forRoot()
   
    
  ],
  providers: [
    //AuthService,
    CookieService,
    UserService, 
    
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
      },
    /*AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }  */
    /*{
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
