import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalityquizComponent } from './hospitalityquiz.component';

describe('HospitalityquizComponent', () => {
  let component: HospitalityquizComponent;
  let fixture: ComponentFixture<HospitalityquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalityquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalityquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
