import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../core/services/todo-service';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todos-container',
  imports: [Todo],
  templateUrl: './todos-container.html',
  styleUrl: './todos-container.scss',
})
export class TodosContainer implements OnInit {
  public readonly todoService = inject(TodoService);
  public readonly todos = this.todoService.list;

  ngOnInit(): void {
    this.todoService.getAllTodos();
  }
}
