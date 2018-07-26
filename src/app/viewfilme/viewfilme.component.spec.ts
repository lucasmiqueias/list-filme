import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfilmeComponent } from './viewfilme.component';

describe('ViewfilmeComponent', () => {
  let component: ViewfilmeComponent;
  let fixture: ComponentFixture<ViewfilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
