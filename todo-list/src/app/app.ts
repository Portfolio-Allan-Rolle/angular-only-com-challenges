import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { AddTodoForm } from './todos/add-todo-form/add-todo-form';
import { TodosContainer } from './todos/todos-container/todos-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AddTodoForm, TodosContainer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'todo-list';
}
