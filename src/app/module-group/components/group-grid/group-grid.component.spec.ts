import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGridComponent } from './group-grid.component';

describe('GroupGridComponent', () => {
  let component: GroupGridComponent;
  let fixture: ComponentFixture<GroupGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
