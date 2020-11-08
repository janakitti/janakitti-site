import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtrolioComponent } from './virtrolio.component';

describe('VirtrolioComponent', () => {
  let component: VirtrolioComponent;
  let fixture: ComponentFixture<VirtrolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtrolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtrolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
