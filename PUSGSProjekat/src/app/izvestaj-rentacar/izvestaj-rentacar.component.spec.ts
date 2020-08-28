import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvestajRentacarComponent } from './izvestaj-rentacar.component';

describe('IzvestajRentacarComponent', () => {
  let component: IzvestajRentacarComponent;
  let fixture: ComponentFixture<IzvestajRentacarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzvestajRentacarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvestajRentacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
