import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CountComponent } from './count/count.component';
import { CountButtonComponent } from './count-button/count-button.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { CepComponent } from './cep/cep.component';

const routes: Routes = [
    { path: 'todos', component: TodoListComponent },
    { path: '', component: HomeComponent },
    { path: 'cep/:cep', component: CepComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        TodoItemComponent,
        CountComponent,
        CountButtonComponent,
        TodoListComponent,
        HomeComponent,
        CepComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }