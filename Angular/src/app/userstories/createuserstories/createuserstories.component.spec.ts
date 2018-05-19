import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserstoriesComponent } from './createuserstories.component';

describe('CreateuserstoriesComponent', () => {
  let component: CreateuserstoriesComponent;
  let fixture: ComponentFixture<CreateuserstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateuserstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
