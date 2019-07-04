import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { CountButtonComponent } from './count-button/count-button.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todos', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },    //esse é o lazy loading de rotas
    //loadChildren: './todo/todo.module#TodoListComponent' //Assim era no Angular 7 pra trás
    { path: 'cep', loadChildren: () => import('./cep/cep.module').then(m => m.CepModule) }
];

@NgModule({
    declarations: [
        AppComponent,
        CountComponent,
        CountButtonComponent,
        HomeComponent
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