import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUXUIComponent } from './course-uxui.component';

describe('CourseUXUIComponent', () => {
  let component: CourseUXUIComponent;
  let fixture: ComponentFixture<CourseUXUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseUXUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseUXUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
