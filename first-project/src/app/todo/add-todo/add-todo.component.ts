import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

    email: String = '';
    todo: Todo = {
        id: null,
        title: '',
        description: '',
        finished: false,
        date: ''
    };

    constructor(private todoService: TodoService, private router: Router) { }

    ngOnInit() {
    }

    addTodo() {
        this.todoService.addTodo(this.todo).subscribe(value => {
            this.router.navigateByUrl('/todos');
        });
    }

}
