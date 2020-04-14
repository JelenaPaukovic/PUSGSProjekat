import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioDodajComponent } from './avio-dodaj.component';

describe('AvioDodajComponent', () => {
  let component: AvioDodajComponent;
  let fixture: ComponentFixture<AvioDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvioDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvioDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
