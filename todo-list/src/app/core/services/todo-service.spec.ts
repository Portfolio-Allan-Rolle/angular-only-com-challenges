import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo-service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created with correct data', () => {
    expect(service).toBeTruthy();
    expect(service.stateKey).toBe('todos');
  });
});
