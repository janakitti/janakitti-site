import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HushHushComponent } from './hush-hush.component';

describe('HushHushComponent', () => {
  let component: HushHushComponent;
  let fixture: ComponentFixture<HushHushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HushHushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HushHushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
