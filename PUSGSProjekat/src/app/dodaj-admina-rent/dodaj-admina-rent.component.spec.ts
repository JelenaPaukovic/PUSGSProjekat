import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAdminaRentComponent } from './dodaj-admina-rent.component';

describe('DodajAdminaRentComponent', () => {
  let component: DodajAdminaRentComponent;
  let fixture: ComponentFixture<DodajAdminaRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajAdminaRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajAdminaRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
