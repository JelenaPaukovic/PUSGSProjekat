import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentacarPodaciComponent } from './rentacar-podaci.component';

describe('RentacarPodaciComponent', () => {
  let component: RentacarPodaciComponent;
  let fixture: ComponentFixture<RentacarPodaciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentacarPodaciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentacarPodaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
