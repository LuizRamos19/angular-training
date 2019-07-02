import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Luiz';
    items = ['Luiz', 'Jéssica', 'Adailson', 'Ramsés', 'Lourdes'];

    ngOnInit() {
        setTimeout(() => {
            this.title = 'Ramos';
        }, 2000)
    }

    newItem() {
        const text = prompt('Digite o nome');
        this.items.push(text);
    }
}