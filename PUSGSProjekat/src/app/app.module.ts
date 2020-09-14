import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import {animate, trigger, state, style, transition} from '@angular/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijaFormaComponent } from './registracija-forma/registracija-forma.component';
import { PrijavaFormaComponent } from './prijava-forma/prijava-forma.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminSistemProfilComponent } from './admin-sistem-profil/admin-sistem-profil.component';
import { DodajAkompFormaComponent } from './dodaj-akomp-forma/dodaj-akomp-forma.component';
import { DodajRecarFormaComponent } from './dodaj-recar-forma/dodaj-recar-forma.component';
import { AvioPocetnaComponent } from './avio-pocetna/avio-pocetna.component';
import { RentPocetnaComponent } from './rent-pocetna/rent-pocetna.component';
import { RentProfilComponent } from './rent-profil/rent-profil.component';
import { HomepageFormaComponent } from './homepage-forma/homepage-forma.component';
import { RentAdminProfilComponent } from './rent-admin-profil/rent-admin-profil.component';
import { AviokompanijePocetnaComponent } from './aviokompanije-pocetna/aviokompanije-pocetna.component';
import { AviokompanijeFilteredComponent } from './aviokompanije-filtered/aviokompanije-filtered.component';
import { ProfilKorisnikaComponent } from './profil-korisnika/profil-korisnika.component';
import { RentFilteredComponent } from './rent-filtered/rent-filtered.component';
import { AviokompAdminProfilComponent } from './aviokomp-admin-profil/aviokomp-admin-profil.component';
import { AvioProfilComponent } from './avio-profil/avio-profil.component';
import { UserService } from './services/korisnik-service/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TokenInterceptor } from './auth/tokenInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  
import { RegistracijaAdminComponent } from './registracija-admin/registracija-admin.component';
import { PromeniLozinkuComponent } from './promeni-lozinku/promeni-lozinku.component';

import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { RentIzvestajComponent } from './rent-izvestaj/rent-izvestaj.component'
import {IzvestajAvioComponent} from './izvestaj-avio/izvestaj-avio.component';

/*
export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('app -id')  
      }, 
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('266307384505-kr2k6e05sfvukul2krhofkvbgvs94fov.apps.googleusercontent.com')  
      }  
    ]  
  );  
  return config;  
}  
*/

let config = new AuthServiceConfig([
  {
     id: GoogleLoginProvider.PROVIDER_ID,
     provider: new GoogleLoginProvider('219104745928-b057e5erdn5hs4b1bshsr8g42kgl7453.apps.googleusercontent.com')
  },
/*{
     id: FacebookLoginProvider.PROVIDER_ID,
     provider: new FacebookLoginProvider(Facebook AppId)
  },*/
]);
export function provideConfig()
 {
    return config;
 }

@NgModule({
  declarations: [
  
    AppComponent,
    RegistracijaFormaComponent,
    PrijavaFormaComponent,
    NavbarComponent,
    AdminSistemProfilComponent,
    DodajAkompFormaComponent,
    DodajRecarFormaComponent,
    AvioPocetnaComponent,
    RentPocetnaComponent,
    RentProfilComponent,
    HomepageFormaComponent,
    RentAdminProfilComponent,
    AviokompanijePocetnaComponent,
    AviokompanijeFilteredComponent,
    ProfilKorisnikaComponent,
    RentFilteredComponent,
    AviokompAdminProfilComponent,
    AvioProfilComponent,
    RegistracijaAdminComponent,
    PromeniLozinkuComponent,
    RentIzvestajComponent,
    IzvestajAvioComponent
  ],
  imports: [
    ChartsModule,
    //WavesModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      //progressBar: true
    }),
    SocialLoginModule.initialize(config)
  ],
  providers: [
    AuthService,
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
    },/*
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }, */
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
