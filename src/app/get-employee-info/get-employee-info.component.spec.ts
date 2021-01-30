import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeInfoComponent } from './get-employee-info.component';

describe('GetEmployeeInfoComponent', () => {
  let component: GetEmployeeInfoComponent;
  let fixture: ComponentFixture<GetEmployeeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmployeeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
