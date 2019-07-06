import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../typings/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private pCount = new BehaviorSubject(0);
    count = this.pCount.asObservable();
    readonly URL = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) { }

    getTodos(userId: string): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(`${this.URL}/users/${userId}/todos`);
    }

    addTodo(todo: Todo) {
        return this.httpClient.post(`${this.URL}/todos`, todo);
    }

    getTodo(id: String) {
        return this.httpClient.get(`${this.URL}/todos/${id}`);
    }

    updateTodo(id: Number, todo: Todo) {
        return this.httpClient.put(`${this.URL}/todos/${id}`, todo);
    }

    deleteTodo(id: Number) {
        return this.httpClient.delete(`${this.URL}/todos/${id}`);
    }

    increase() {
        this.pCount.next(this.pCount.value + 1);
    }

    decrease() {
        this.pCount.next(this.pCount.value - 1);
    }
}
