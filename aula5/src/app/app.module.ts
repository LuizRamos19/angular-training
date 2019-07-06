import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { countReducer } from './store/count.reducer';

@NgModule({
    declarations: [
        AppComponent,
        CountComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({
            count: countReducer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
