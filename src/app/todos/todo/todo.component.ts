import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { DeleteTodo, GetTodos, SetSelectedTodo } from 'src/app/ngxs/actions/todo.action';
import { TodoState } from 'src/app/ngxs/states/todo.state';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Select(TodoState.getTodoList) todos: Observable<Todo[]>;

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.store.dispatch(new GetTodos());
    }

    deleteTodo(id: number) {
        this.store.dispatch(new DeleteTodo(id));
    }

    editTodo(payload: Todo) {
        this.store.dispatch(new SetSelectedTodo(payload));
    }

}
