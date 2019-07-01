import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListCheckedComponent } from './todo-list-checked.component';

describe('TodoListCheckedComponent', () => {
  let component: TodoListCheckedComponent;
  let fixture: ComponentFixture<TodoListCheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListCheckedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
