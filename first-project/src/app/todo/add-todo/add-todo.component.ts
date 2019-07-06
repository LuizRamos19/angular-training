import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/todo';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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
        date: '',
        userId: ''
    };
    isEdit: Boolean = false;
    buttonName: String = 'Adicionar';

    constructor(private todoService: TodoService, private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.id) {
                this.isEdit = true;
                this.buttonName = 'Editar';
                this.todoService.getTodo(params.id).subscribe((todo: Todo) => {
                    this.todo = todo;
                });
            }
        });

        this.authService.currentUser.subscribe(user => {
            if (user) {
                this.todo.userId = user.id;
            }
        });
    }

    addTodo() {
        if (this.isEdit) {
            this.todoService.updateTodo(this.todo.id, this.todo).subscribe(() => {
                this.router.navigateByUrl('/todos');
            });
        } else {
            this.todoService.addTodo(this.todo).subscribe(value => {
                this.router.navigateByUrl('/todos');
            });
        }
    }

}
