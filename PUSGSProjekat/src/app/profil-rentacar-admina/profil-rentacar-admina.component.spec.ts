import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRentacarAdminaComponent } from './profil-rentacar-admina.component';

describe('ProfilRentacarAdminaComponent', () => {
  let component: ProfilRentacarAdminaComponent;
  let fixture: ComponentFixture<ProfilRentacarAdminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilRentacarAdminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRentacarAdminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
