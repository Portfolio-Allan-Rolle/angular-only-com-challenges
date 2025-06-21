import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo } from './todo';
import { ITodo } from '../../core/models/models';

describe('Todo', () => {
  let component: Todo;
  let fixture: ComponentFixture<Todo>;

  const mockTodos: ITodo[] = [{ id: 'eee', body: 'lorem', completed: false }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todo],
    }).compileComponents();

    fixture = TestBed.createComponent(Todo);
    fixture.componentRef.setInput('todo', mockTodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create todo component', () => {
    expect(component).toBeTruthy();
  });
});
