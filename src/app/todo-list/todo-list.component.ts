import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../shared/todo-list.service';
import { formatDate } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import * as _ from 'lodash';


      

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  public todoDescription = '';
  public todoDueDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  public showDone = false;

  constructor(public todoListService: TodoListService, private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  public addTodo(): void {
    if (this.todoDescription && this.todoDueDate) {
      this.todoListService.addTodo(this.todoDescription, new Date(this.todoDueDate));
      this.todoDescription = '';
      this.todoDueDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    }
  }

public translate(id: string, description: string): void {
    this.http.post("http://localhost:3000/text/translateText", {text: description}).subscribe((data) => {
      //@ts-ignore
      this.todoListService.translateToDoById(id, data.translateText.text)
    });
}
}

