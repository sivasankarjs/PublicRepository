import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepprojectsComponent } from './deletepprojects.component';

describe('DeletepprojectsComponent', () => {
  let component: DeletepprojectsComponent;
  let fixture: ComponentFixture<DeletepprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
