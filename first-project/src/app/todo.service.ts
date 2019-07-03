import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../typings/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private pCount = new BehaviorSubject(0);
    count = this.pCount.asObservable();
    readonly URL = 'http://localhost:3000/todos';

    constructor(private httpClient: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(this.URL);
    }

    increase() {
        this.pCount.next(this.pCount.value + 1);
    }

    decrease() {
        this.pCount.next(this.pCount.value - 1);
    }
}
