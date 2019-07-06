import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

    messages = [];

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.store.select('messages').subscribe(value => {      //esse select 'message' tem que ser o mesmo que foi declarado no app.module.ts
            console.log(value);
            this.messages = value.messages;
        });
    }

    deleteMessage(id: number) {
        this.store.dispatch({
            type: 'DELETE_MESSAGE',
            payload: id
        });
    }

}
