import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentacarServisComponent } from './rentacar-servis.component';

describe('RentacarServisComponent', () => {
  let component: RentacarServisComponent;
  let fixture: ComponentFixture<RentacarServisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentacarServisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentacarServisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
