import { Component, inject, input } from '@angular/core';
import { ITodo } from '../../core/models/models';
import { TodoService } from '../../core/services/todo-service';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  todoService = inject(TodoService);
  todo = input.required<ITodo>();

  onToggleComplete(id: string) {
    this.todoService.toggleComplete(id);
  }

  onDeleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }
}
