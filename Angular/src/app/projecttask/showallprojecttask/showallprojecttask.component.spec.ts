import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallprojecttaskComponent } from './showallprojecttask.component';

describe('ShowallprojecttaskComponent', () => {
  let component: ShowallprojecttaskComponent;
  let fixture: ComponentFixture<ShowallprojecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallprojecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallprojecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
