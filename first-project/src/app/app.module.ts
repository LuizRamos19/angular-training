import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CountComponent } from './count/count.component';
import { CountButtonComponent } from './count-button/count-button.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep.component';
import { CepTextComponent } from './cep-text/cep-text.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BoolPipe } from './bool.pipe';

const routes: Routes = [
    { path: 'todos', component: TodoListComponent },
    { path: '', component: HomeComponent },
    { path: 'cep', component: CepTextComponent },
    { path: 'cep/:cep', component: CepComponent },
    { path: 'add', component: AddTodoComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        TodoItemComponent,
        CountComponent,
        CountButtonComponent,
        TodoListComponent,
        HomeComponent,
        CepComponent,
        CepTextComponent,
        AddTodoComponent,
        BoolPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }