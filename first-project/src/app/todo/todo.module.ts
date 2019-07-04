import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BoolPipe } from './bool.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: 'add', component: AddTodoComponent }
];

@NgModule({
    declarations: [
        TodoItemComponent,
        TodoListComponent,
        AddTodoComponent,
        BoolPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)   //o forRoot só é utilizado para as páginas principais. As outras são sempre com forChild
    ]
})
export class TodoModule { }
