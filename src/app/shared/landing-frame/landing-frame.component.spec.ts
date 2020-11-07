import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFrameComponent } from './landing-frame.component';

describe('LandingFrameComponent', () => {
  let component: LandingFrameComponent;
  let fixture: ComponentFixture<LandingFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
