import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-count',
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

    count$: Observable<number>;

    constructor(private store: Store<number>) { }

    ngOnInit() {
        this.count$ = this.store.select('count');
    }

    increase() {
        this.store.dispatch({
            type: 'INCREMENT'
        });
    }

    decrease() {
        this.store.dispatch({
            type: 'DECREMENT'
        });
    }

}
