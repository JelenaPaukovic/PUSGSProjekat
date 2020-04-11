import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioServisComponent } from './avio-servis.component';

describe('AvioServisComponent', () => {
  let component: AvioServisComponent;
  let fixture: ComponentFixture<AvioServisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvioServisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvioServisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
