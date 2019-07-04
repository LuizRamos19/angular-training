import { TestBed } from '@angular/core/testing';

import { SumService } from './sum.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SumService', () => {

    let httpMock: HttpTestingController = null;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
        ]
    }));

    beforeEach(() => {
        httpMock = TestBed.get(HttpTestingController);
    })

    it('should be created', () => {
        const service: SumService = TestBed.get(SumService);
        expect(service).toBeTruthy();
    });

    it('deve retornar 7', () => {
        const service: SumService = TestBed.get(SumService);
        expect(service.sum(2, 5)).toBe(7);
    });

    it('deve receber todos', () => {
        const service: SumService = TestBed.get(SumService);
        const fakeData = [
            { title: 'Title 1', description: 'Description 1' },
            { title: 'Title 2', description: 'Description 2' }
        ];

        service.getTodos().subscribe((value: Array<any>) => {
            expect(value.length).toBe(2);
            expect(value[0].length).toBeUndefined();
            expect(value[1].title).toBe('Title 2');
        });

        const req = httpMock.expectOne('https://alefesouza.dev/gama/languages.php');
        expect(req.request.method).toBe('GET');
        req.flush(fakeData);
    });
});
