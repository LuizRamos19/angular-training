import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-count',
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
    count = 0;

    constructor() { }

    ngOnInit() {
        let timer = setInterval(() => {
            this.count++;
            if (this.count >= 10) {
                clearInterval(timer);
            }
        }, 1000)
    }

}
