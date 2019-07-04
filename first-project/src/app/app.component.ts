import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { map, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    count = 0;

    constructor(public todoService: TodoService) { }

    ngOnInit() {
        this.todoService.count
            .pipe(
                map(value => value * 2),
                debounceTime(2000)
            )
            .subscribe(value => {
                this.count = value;
            });
    }
}