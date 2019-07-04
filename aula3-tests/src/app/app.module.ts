import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
