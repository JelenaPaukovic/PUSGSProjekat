import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvestajAvioComponent } from './izvestaj-avio.component';

describe('IzvestajAvioComponent', () => {
  let component: IzvestajAvioComponent;
  let fixture: ComponentFixture<IzvestajAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzvestajAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvestajAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
