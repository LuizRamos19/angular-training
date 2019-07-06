import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { countReducer } from './store/count.reducer';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { HeaderComponent } from './header/header.component';
import { messageReducer } from './store/messages.reducer';

@NgModule({
    declarations: [
        AppComponent,
        CountComponent,
        AddMessageComponent,
        MessageListComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot({
            count: countReducer,
            messages: messageReducer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
