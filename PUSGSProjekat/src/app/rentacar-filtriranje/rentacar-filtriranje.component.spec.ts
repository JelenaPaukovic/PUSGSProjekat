import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentacarFiltriranjeComponent } from './rentacar-filtriranje.component';

describe('RentacarFiltriranjeComponent', () => {
  let component: RentacarFiltriranjeComponent;
  let fixture: ComponentFixture<RentacarFiltriranjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentacarFiltriranjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentacarFiltriranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
