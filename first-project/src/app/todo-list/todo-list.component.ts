import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/todo';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];

    constructor(public todoService: TodoService) { }

    ngOnInit() {
        this.todoService.getTodos().subscribe(value => {
            this.todos = value;
        });
    }

}
