import { Component, OnInit } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoListService } from '../shared/todo-list.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  constructor(public todoListService: TodoListService) {
  }

  ngOnInit(): void {
  }

  getTodoPercentage(): number {
    if (this.todoListService.todos.length) {
      return this.todoListService.todos.filter(t => !t.doneDate).length / this.todoListService.todos.length * 100;
    } else {
      return 0;
    }
  }

  getDonePercentage(): number {
    if (this.todoListService.todos.length) {
      return this.todoListService.todos.filter(t => t.doneDate).length / this.todoListService.todos.length * 100;
    } else {
      return 0;
    }
  }
}
