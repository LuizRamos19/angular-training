import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-cep',
    templateUrl: './cep.component.html',
    styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

    cep: any = {};

    constructor(public cepService: CepService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {    //Pega os parâmetros que vieram da URL
            this.cepService.getCep(params.cep).subscribe(
                value => {
                    this.cep = value;
                    console.log(this.cep)
                },
                error => {
                    console.log(error)
                });
        });

    }

}
