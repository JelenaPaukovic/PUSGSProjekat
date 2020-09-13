import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentFilterdeComponent } from './rent-filterde.component';

describe('RentFilterdeComponent', () => {
  let component: RentFilterdeComponent;
  let fixture: ComponentFixture<RentFilterdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentFilterdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentFilterdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
