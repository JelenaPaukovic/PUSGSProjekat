import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioFilteredComponent } from './avio-filtered.component';

describe('AvioFilteredComponent', () => {
  let component: AvioFilteredComponent;
  let fixture: ComponentFixture<AvioFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvioFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvioFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
