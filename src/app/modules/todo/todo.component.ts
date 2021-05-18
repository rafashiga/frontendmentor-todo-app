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
  theme = 'light mode';
  isDarkMode = false;

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

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark' ?? false;
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', theme);
      this.theme = 'dark mode';
    }
  }

  addTodo(event: any): void {
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

  deleteTodo(todo: ITodo): void {
    const newData = this.data.filter((item) => todo.order !== item.order);
    this.data = newData;
  }

  toggleTheme(): void {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);

    if (!this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.theme = 'light mode';
      this.isDarkMode = true;
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      this.theme = 'dark mode';
      this.isDarkMode = false;
      localStorage.removeItem('theme');
    }
  }

  toggleCheckbox(event: any, todo: ITodo): void {
    const isChecked = event.target.checked;
    this.data.forEach((item) => {
      if (item.order === todo.order) {
        item.isCompleted = isChecked;
      }
    });
  }
}
