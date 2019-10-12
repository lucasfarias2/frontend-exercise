import { TestBed, getTestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { map } from 'rxjs/operators';

describe('CategoriesService', () => {
  let injector: TestBed;
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CategoriesService
      ],
    });
    injector = getTestBed();
    service = injector.get(CategoriesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: CategoriesService = TestBed.get(CategoriesService);
    expect(service).toBeTruthy();
  });

  describe('#getCategories', () => {
    it('should return an Observable<string[]> with decoded values', () => {
      const encodedDummyCategories = {
        data: [
        'cat A',
        'cat B',
        'Ben &amp; Jerrys'
      ]};

      const decodedDummyCategories = [
        'cat A',
        'cat B',
        'Ben & Jerrys'
      ];

      service.getCategories().subscribe(categories => {
        expect(categories.length).toBe(3);
        expect(categories).toEqual(decodedDummyCategories);
      });

      const req = httpMock.expectOne('/assets/items.json');
      expect(req.request.method).toBe("GET");
      req.flush(encodedDummyCategories);
    });
  });
});
