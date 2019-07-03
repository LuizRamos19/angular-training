import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/todo';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];
    todos$: Observable<Todo[]>;

    constructor(public todoService: TodoService) { }

    ngOnInit() {
        this.todos$ = this.todoService.getTodos();
    }

}
