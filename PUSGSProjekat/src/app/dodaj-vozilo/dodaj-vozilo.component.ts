import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/korisnik/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodaj-vozilo',
  templateUrl: './dodaj-vozilo.component.html',
  styleUrls: ['./dodaj-vozilo.component.css']
})
export class DodajVoziloComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
