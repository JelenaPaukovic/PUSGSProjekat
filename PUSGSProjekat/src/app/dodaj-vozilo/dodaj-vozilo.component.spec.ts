import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajVoziloComponent } from './dodaj-vozilo.component';

describe('DodajVoziloComponent', () => {
  let component: DodajVoziloComponent;
  let fixture: ComponentFixture<DodajVoziloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajVoziloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajVoziloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
