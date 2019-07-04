import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CepComponent } from './cep/cep.component';
import { CepTextComponent } from './cep-text/cep-text.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: CepTextComponent },
    { path: ':cep', component: CepComponent }
];

@NgModule({
    declarations: [
        CepTextComponent,
        CepComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class CepModule { }
