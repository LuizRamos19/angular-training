import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SumService {

    private URL = 'https://alefesouza.dev/gama/languages.php';

    constructor(private httpClient: HttpClient) { }

    sum(n1: number, n2: number) {
        return n1 + n2;
    }

    getTodos() {
        return this.httpClient.get(this.URL);
    }
}
