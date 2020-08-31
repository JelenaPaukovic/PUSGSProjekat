import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSistemComponent } from './admin-sistem.component';

describe('AdminSistemComponent', () => {
  let component: AdminSistemComponent;
  let fixture: ComponentFixture<AdminSistemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSistemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSistemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
