import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesquizComponent } from './airlinesquiz.component';

describe('AirlinesquizComponent', () => {
  let component: AirlinesquizComponent;
  let fixture: ComponentFixture<AirlinesquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinesquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
