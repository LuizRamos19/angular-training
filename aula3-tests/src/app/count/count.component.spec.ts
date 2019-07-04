import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountComponent } from './count.component';

describe('CountComponent', () => {
    let component: CountComponent;
    let fixture: ComponentFixture<CountComponent>;
    let element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CountComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CountComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.nativeElement;   //estou pegando o elemento renderizado
        fixture.detectChanges();
    });

    it('Clicar no botão aumentar duas vezes exibe 2', () => {
        component.increase();
        component.increase();   //chamando o método duas vezes

        fixture.detectChanges();    //verificar se houve mudanças

        expect(element.querySelector('#counter').textContent).toBe('Count: 2');     //realiza a validação, valida se o valor do campo #counter é igual a 'Count: 2'
    });
});
