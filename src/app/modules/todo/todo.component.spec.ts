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
});
