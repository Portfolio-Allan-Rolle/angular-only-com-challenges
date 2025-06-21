import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosContainer } from './todos-container';
import { TodoService } from '../../core/services/todo-service';

describe('TodosContainer', () => {
  let component: TodosContainer;
  let fixture: ComponentFixture<TodosContainer>;
  let service: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosContainer);
    component = fixture.componentInstance;
    service = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create Todo Container component', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke getAllTodos method on init', () => {
    const spy = spyOn(service, 'getAllTodos');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
