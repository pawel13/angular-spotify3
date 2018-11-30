import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';

fdescribe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toMatch('testing works')
    expect(fixture.debugElement.nativeElement.innerHTML).toMatch('testing works')

    expect(component).toBeTruthy();
  });
});