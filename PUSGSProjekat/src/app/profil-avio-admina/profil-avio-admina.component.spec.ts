import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAvioAdminaComponent } from './profil-avio-admina.component';

describe('ProfilAvioAdminaComponent', () => {
  let component: ProfilAvioAdminaComponent;
  let fixture: ComponentFixture<ProfilAvioAdminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilAvioAdminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAvioAdminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
