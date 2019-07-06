import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/todo';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];
    todos$: Observable<Todo[]>;
    // userId: string = ''; // *var para deleção com async pipe

    constructor(public todoService: TodoService, private authService: AuthService) { }

    ngOnInit() {
        this.authService.currentUser.subscribe(user => {
            if (user) {
                this.todoService.getTodos(user.id).subscribe((todos) => {
                    this.todos = todos;
                });
                // this.userId = user.id;   // *var para deleção com async pipe
                // this.todos$ = this.todoService.getTodos(user.id);   // para deletar, precisaremos alterar os valores da lista, por isso não pode usar async pipe
            }
        });
    }

    onDeleteItem(id: Number) {
        this.todoService.deleteTodo(id).subscribe(() => {
            // this.todos$ = this.todoService.getTodos(this.userId);    // *comando para deleção com async pipe
            this.todos = this.todos.filter(todo => {
                todo.id !== id;
            });
            console.log("Deletado com sucesso");
        })
    }

}
