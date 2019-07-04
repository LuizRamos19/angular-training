import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { BoolPipe } from './bool.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    BoolPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
