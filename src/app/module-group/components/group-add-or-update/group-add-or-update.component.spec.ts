import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAddOrUpdateComponent } from './group-add-or-update.component';

describe('GroupAddOrUpdateComponent', () => {
  let component: GroupAddOrUpdateComponent;
  let fixture: ComponentFixture<GroupAddOrUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupAddOrUpdateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAddOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
