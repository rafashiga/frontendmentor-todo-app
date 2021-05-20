import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@/shared/shared.module';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    const store = {} as any;
    spyOn(localStorage, 'getItem').and.callFake((key) => store[key]);
    spyOn(localStorage, 'setItem').and.callFake(
      (key, value) => (store[key] = value + '')
    );
    spyOn(localStorage, 'removeItem').and.callFake((key) => delete store[key]);

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', () => {
    const event = {
      preventDefault: () => null,
      target: {
        value: 'any_value',
      },
    };
    component.addTodo(event);

    expect(component.data.length).toBe(7);
  });

  it('should delete a todo', () => {
    const todo = {
      description: 'Complete Todo App on Frontend Mentor',
      isCompleted: false,
      order: 6,
    };
    component.deleteTodo(todo);

    expect(component.data.length).toBe(5);
  });

  it('should clean completed todo', () => {
    component.data[5].isCompleted = true;

    component.clearCompleted();

    expect(component.data.length).toBe(5);
  });

  it('should get total todo not completed', () => {
    const result = component.getTotalNotCompleted();

    expect(result).toBe(6);
  });

  it('should toggleCheckbox set isCompleted to true if todo is not completed', () => {
    const event = {
      target: {
        checked: true,
      },
    };

    const todo = {
      description: 'Complete Todo App on Frontend Mentor',
      isCompleted: false,
      order: 6,
    };
    component.toggleCheckbox(event, todo);

    expect(component.data[5].isCompleted).toBeTruthy();
  });
});
