import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentacarDodajComponent } from './rentacar-dodaj.component';

describe('RentacarDodajComponent', () => {
  let component: RentacarDodajComponent;
  let fixture: ComponentFixture<RentacarDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentacarDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentacarDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
