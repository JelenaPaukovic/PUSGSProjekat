
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/korisnik/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-prijava-korisnika',
  templateUrl: './prijava-korisnika.component.html',
  styleUrls: ['./prijava-korisnika.component.css']
})
export class PrijavaKorisnikaComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  //socialProvider = "google";
  constructor(public service: UserService, private router: Router, private toastr: ToastrService,
    /*public OAuth: AuthService,*/
    private cookieService: CookieService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    //if (localStorage.getItem('token') != null)
      //this.router.navigateByUrl('/home');
  }

  /*LoginWithGoogle(){
    let socialPlatformProvider;  
    if (this.socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    } else if (this.socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialusers);   

      this.service.externalLogin(socialusers).subscribe((res:any)=>{
        localStorage.setItem('token', res.token);
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('uloga', res.uloga);
        localStorage.setItem('sifraIzmenjena', res.izmenjenaLozinka);
        this.router.navigateByUrl('/homepage-forma');
        environment.uloga = res.uloga;
        NavbarComponent.uloga = res.uloga;
        //this.router.navigateByUrl('/home');
      });
   
      console.log(socialusers);  
    });  

  }*/

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('UserName', res.UserName);
        localStorage.setItem('uloga', res.uloga);
        localStorage.setItem('sifraIzmenjena', res.izmenjenaLozinka);
        this.router.navigateByUrl('/homepage-forma');
        environment.uloga = res.uloga;
        NavbarComponent.uloga = res.uloga;
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.', {
            timeOut: 8000,
      });
        else
          console.log(err);
      }
    );
  }
}
