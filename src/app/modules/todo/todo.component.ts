import { Component, OnInit } from '@angular/core';

interface ITodo {
  description: string;
  isCompleted: boolean;
  order: number;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  data: ITodo[] = [
    {
      description: 'Complete online JavaScript course',
      isCompleted: false,
      order: 1,
    },
    {
      description: 'Jog around the park 3x',
      isCompleted: false,
      order: 2,
    },
    {
      description: '10 minutes meditation',
      isCompleted: false,
      order: 3,
    },
    {
      description: 'Read for 1 hour',
      isCompleted: false,
      order: 4,
    },
    {
      description: 'Pick up groceries',
      isCompleted: false,
      order: 5,
    },
    {
      description: 'Complete Todo App onm Frontend Mentor',
      isCompleted: false,
      order: 6,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addTodo(event: any) {
    event.preventDefault();
    const newTodo = {
      description: event.target.value,
      isCompleted: false,
      order: this.data.length + 1,
    };

    this.data.push(newTodo);
    const input = document.querySelector('.input') as HTMLInputElement;
    input.value = '';
  }

  deleteTodo(todo: ITodo) {
    const newData = this.data.filter((item) => todo.order !== item.order);

    this.data = newData;
  }
}
