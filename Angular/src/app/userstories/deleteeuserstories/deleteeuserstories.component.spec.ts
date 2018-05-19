import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeuserstoriesComponent } from './deleteeuserstories.component';

describe('DeleteeuserstoriesComponent', () => {
  let component: DeleteeuserstoriesComponent;
  let fixture: ComponentFixture<DeleteeuserstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteeuserstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteeuserstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
