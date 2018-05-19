import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserstoriesComponent } from './edituserstories.component';

describe('EdituserstoriesComponent', () => {
  let component: EdituserstoriesComponent;
  let fixture: ComponentFixture<EdituserstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
