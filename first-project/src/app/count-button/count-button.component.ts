import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
    selector: 'app-count-button',
    templateUrl: './count-button.component.html',
    styleUrls: ['./count-button.component.css']
})
export class CountButtonComponent implements OnInit {
    count = 0;
    constructor(public todoService: TodoService) { }

    ngOnInit() {
        this.todoService.count.subscribe(value => {
            this.count = value;
        });
    }

}
