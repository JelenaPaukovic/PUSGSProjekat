import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './auth/tokenInterceptor';

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
//import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angular-6-social-login';  


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
    HomepageFormaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    MDBBootstrapModule.forRoot()
   
    
  ],
  providers: [
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
