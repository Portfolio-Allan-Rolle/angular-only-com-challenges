import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { TodoService } from '../../core/services/todo-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo-form.html',
  styleUrl: './add-todo-form.scss',
})
export class AddTodoForm {
  todoService = inject(TodoService);
  todoBody = model('');

  onSubmit($event: Event) {
    $event.preventDefault();
    this.todoBody.set('');
  }
}
