import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateGroupComponent } from './add-or-update-group.component';

describe('AddOrUpdateGroupComponent', () => {
  let component: AddOrUpdateGroupComponent;
  let fixture: ComponentFixture<AddOrUpdateGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
