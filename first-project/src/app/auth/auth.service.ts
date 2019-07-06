import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private pUser = new BehaviorSubject(null);
    currentUser = this.pUser.asObservable();

    private accountURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyChQV768MAzFq1_oaVaJffkII-qCNgY8so`;
    private loginURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyChQV768MAzFq1_oaVaJffkII-qCNgY8so`;
    private tokenURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyChQV768MAzFq1_oaVaJffkII-qCNgY8so`;

    constructor(private httpClient: HttpClient) { }

    verifyToken(token: String) {
        return this.httpClient.post(this.tokenURL, { idToken: token });
    }

    login(email: String, password: String) {
        return this.httpClient.post(this.loginURL, { email, password });
    }

    createAccount(email: String, password: String) {
        return this.httpClient.post(this.accountURL, { email, password });
    }

    setUser(user) {
        this.pUser.next(user);
    }

    logout() {
        this.pUser.next(null);
    }

}
