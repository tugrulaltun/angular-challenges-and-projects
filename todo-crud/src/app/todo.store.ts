import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Todo} from './todo.model';

export interface TodoState {
  todos: Todo[];
}

@Injectable()
export class TodoStore extends ComponentStore<TodoState> {

  constructor() {
    super({todos: []});
  }

  readonly todos$ = this.select(state => state.todos);

  readonly addTodo = this.updater((state, newTodo: Todo) => ({
    todos: [...state.todos, newTodo]
  }));

  readonly removeTodo = this.updater((state, todoId: number) => ({
    todos: state.todos.filter(todo => todo.id !== todoId)
  }));

  readonly updateTodo = this.updater((state, updatedTodo: Todo) => ({
    todos: state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
  }));
}
