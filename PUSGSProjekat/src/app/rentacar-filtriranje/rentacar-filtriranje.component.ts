import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rentacar-filtriranje',
  templateUrl: './rentacar-filtriranje.component.html',
  styleUrls: ['./rentacar-filtriranje.component.css']
})
export class RentacarFiltriranjeComponent implements OnInit {

  @Input() allRentacarServisFilter

  constructor() { }

  ngOnInit(): void {
  }

}
