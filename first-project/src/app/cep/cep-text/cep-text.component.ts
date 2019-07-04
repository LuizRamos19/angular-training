import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
    selector: 'app-cep-text',
    templateUrl: './cep-text.component.html',
    styleUrls: ['./cep-text.component.css']
})
export class CepTextComponent implements OnInit {

    cep: any = {};
    cepText: String = '';

    constructor(public cepService: CepService) { }

    ngOnInit() {
    }

    searchCep() {
        this.cepService.getCep(this.cepText).subscribe(
            value => {
                this.cep = value;
            },
            error => {
                console.log(error)
            });
    }
}
