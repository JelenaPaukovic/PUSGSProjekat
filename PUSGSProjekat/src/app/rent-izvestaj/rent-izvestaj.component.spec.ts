import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentIzvestajComponent } from './rent-izvestaj.component';

describe('RentIzvestajComponent', () => {
  let component: RentIzvestajComponent;
  let fixture: ComponentFixture<RentIzvestajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentIzvestajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentIzvestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
