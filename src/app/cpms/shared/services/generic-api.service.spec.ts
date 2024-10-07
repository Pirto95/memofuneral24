import { TestBed } from '@angular/core/testing';
import { GenericapiService } from './generic-api.service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('GenericapiService', () => {
  let service: GenericapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GenericapiService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(GenericapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('dovrebbe essere creato', () => {
    expect(service).toBeTruthy();
  });

  it('dovrebbe fare una richiesta GET e ritornare i dati', () => {
    const mockData = { data: 'test' };
    const route = 'testRoute';

    service.getData(route).subscribe({
      next: (data) => {
        expect(data).toEqual(mockData);
      },
      error: fail
    });

    const req = httpTestingController.expectOne(`${service['apiUrl']}/${route}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('dovrebbe gestire gli errori', () => {
    const route = 'testRoute';
    const errorMessage = 'Errore nella richiesta';

    service.getData(route).subscribe({
      next: () => fail('dovrebbe fallire con un errore 500'),
      error: (error) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      }
    });

    const req = httpTestingController.expectOne(`${service['apiUrl']}/${route}`);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, { status: 500, statusText: 'Internal Server Error' });
  });
});