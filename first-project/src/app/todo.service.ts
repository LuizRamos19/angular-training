import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private pCount = new BehaviorSubject(0);
    count = this.pCount.asObservable();

    constructor() { }

    increase() {
        this.pCount.next(this.pCount.value + 1);
    }

    decrease() {
        this.pCount.next(this.pCount.value - 1);
    }
}
