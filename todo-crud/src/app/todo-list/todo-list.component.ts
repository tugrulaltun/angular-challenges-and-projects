import {Component} from '@angular/core';
import {TodoStore} from "../todo.store";
import {Todo} from "../todo.model";
import {map, Observable, take, tap} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoStore]
})
export class TodoListComponent {
  todos$ = this.todoStore.todos$;
  hasCompletedTodos$ = this.hasCompletedTodos();

  newTodoTitle = '';

  constructor(private todoStore: TodoStore) {
  }

  addTodo() {
    if (!this.newTodoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: this.newTodoTitle,
      completed: false
    };
    this.todoStore.addTodo(newTodo);
    this.newTodoTitle = '';
  }

  deleteTodo(id: number) {
    this.todoStore.removeTodo(id);
  }

  toggleCompletion(todo: Todo) {
    this.todoStore.updateTodo({
      ...todo,
      completed: !todo.completed
    });
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  updateTodoTitle(todo: Todo, newTitle: string) {
    if (newTitle.trim()) {
      this.todoStore.updateTodo({
        ...todo,
        title: newTitle,
        editing: false
      });
    } else {
      todo.editing = false;
    }
  }

  deleteAllCompleted() {
    this.todos$.pipe(
      take(1),
      map(todos => todos.filter(todo => todo.completed)),
      tap(completedTodos => {
        completedTodos.forEach(todo => this.deleteTodo(todo.id));
      })
    ).subscribe();
  }

  hasCompletedTodos(): Observable<boolean> {
    return this.todos$.pipe(
      map(todos => todos.filter(todo => todo.completed).length > 0)
    );
  }
}
