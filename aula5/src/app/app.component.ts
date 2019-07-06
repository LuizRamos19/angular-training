import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'aula5';
    count$: Observable<number>;

    constructor(private store: Store<number>) {

    }

    ngOnInit() {
        this.count$ = this.store.select('count');
    }
}
