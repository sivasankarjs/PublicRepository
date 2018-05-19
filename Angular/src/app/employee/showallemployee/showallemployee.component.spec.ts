import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallemployeeComponent } from './showallemployee.component';

describe('ShowallemployeeComponent', () => {
  let component: ShowallemployeeComponent;
  let fixture: ComponentFixture<ShowallemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
