import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { map, debounceTime } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    count = 0;
    user$: Observable<any>;

    constructor(public todoService: TodoService, private authService: AuthService, private router: Router) { }

    logout() {
        localStorage.removeItem('token');
        this.authService.setUser(null);
        this.router.navigateByUrl('/auth/login');
    }

    ngOnInit() {
        const token = localStorage.getItem('token');
        if (token) {
            this.authService.verifyToken(token).subscribe((value: any) => {
                this.authService.setUser({
                    id: value.users[0].localId,
                    email: value.users[0].email
                });
            });
        }

        this.todoService.count
            .pipe(
                map(value => value * 2),
                debounceTime(2000)
            )
            .subscribe(value => {
                this.count = value;
            });

        this.user$ = this.authService.currentUser;
    }
}