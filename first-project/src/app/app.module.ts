import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CountComponent } from './count/count.component';
import { CountButtonComponent } from './count-button/count-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    CountComponent,
    CountButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
