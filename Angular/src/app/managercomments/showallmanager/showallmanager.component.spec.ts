import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallmanagerComponent } from './showallmanager.component';

describe('ShowallmanagerComponent', () => {
  let component: ShowallmanagerComponent;
  let fixture: ComponentFixture<ShowallmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
