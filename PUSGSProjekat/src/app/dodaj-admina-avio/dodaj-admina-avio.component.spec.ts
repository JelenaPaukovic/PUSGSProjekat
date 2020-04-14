import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAdminaAvioComponent } from './dodaj-admina-avio.component';

describe('DodajAdminaAvioComponent', () => {
  let component: DodajAdminaAvioComponent;
  let fixture: ComponentFixture<DodajAdminaAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajAdminaAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajAdminaAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
