import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    email: String = '';
    password: String = '';
    confirmPassword: String = '';

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    register() {
        if (this.password !== this.confirmPassword) {
            alert("Senha e confirmar senha não conferem")
            return;
        }

        this.authService.createAccount(this.email, this.password).subscribe(
            (value: any) => {
                console.log("Usuário criado com sucesso ", value);
                localStorage.setItem('token', value.idToken);
                this.authService.setUser({
                    id: value.localId,
                    email: value.email
                }
                );
            }
        );
    }

}
