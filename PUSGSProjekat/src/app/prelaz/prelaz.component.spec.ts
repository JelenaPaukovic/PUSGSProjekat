import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelazComponent } from './prelaz.component';

describe('PrelazComponent', () => {
  let component: PrelazComponent;
  let fixture: ComponentFixture<PrelazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
