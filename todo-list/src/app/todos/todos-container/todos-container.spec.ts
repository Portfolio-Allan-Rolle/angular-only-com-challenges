import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosContainer } from './todos-container';

describe('TodosContainer', () => {
  let component: TodosContainer;
  let fixture: ComponentFixture<TodosContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
