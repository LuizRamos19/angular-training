import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CepService {
    readonly URL = 'http://viacep.com.br/ws/';

    constructor(private httpClient: HttpClient) { }

    getCep(cep: String) {
        return this.httpClient.get(`${this.URL}${cep}/json`);
    }
}
