import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioPodaciComponent } from './avio-podaci.component';

describe('AvioPodaciComponent', () => {
  let component: AvioPodaciComponent;
  let fixture: ComponentFixture<AvioPodaciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvioPodaciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvioPodaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
