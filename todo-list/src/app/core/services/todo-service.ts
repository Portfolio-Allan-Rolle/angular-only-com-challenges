import { Injectable, signal } from '@angular/core';
import { ITodo } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly stateKey = 'todos';
  public list = signal<ITodo[]>([]);

  addTodo(todoBody: string) {
    if (!todoBody || todoBody.trim().length == 0) return;

    const newTodo = {
      id: this.generateUniqueId(),
      body: todoBody.trim(),
      completed: false,
    };

    this.list.update((v) => [...v, newTodo]);
    this.saveToLocalStorage();
  }

  getAllTodos() {
    let value = localStorage.getItem(this.stateKey);
    if (value != '' && value != null && typeof value != 'undefined') {
      this.list.set(JSON.parse(value));
    }
  }

  toggleComplete(id: string) {
    this.list.update((todos) => {
      return todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo,
      );
    });
    this.saveToLocalStorage();
  }

  deleteTodo(id: string) {
    this.list.update((todos) => {
      return todos.filter((todo) => todo.id != id);
    });
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(this.stateKey, JSON.stringify(this.list()));
  }

  clearLocalStorage() {
    if (localStorage.getItem(this.stateKey)) {
      localStorage.clear();
    }
  }

  generateUniqueId() {
    return Math.random().toString(36).substring(2, 9);
  }
}
