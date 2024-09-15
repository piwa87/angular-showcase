import { Injectable } from '@angular/core';
import { BaseApiService } from '@at-common/services';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Part } from '../../../../../../at-common/forms/src/lib/at-partsoegning/part.model';
import * as m from './partsoegning.mock-data';

@Injectable({
  providedIn: 'root'
})
export class PartsoegningApiService extends BaseApiService<Part> {
  baseUrl = 'http://localhost:4200/api';
  url = this.urls.createUrl(this.baseUrl, 'partsoegning');

  searchService(searchTerm: string, selectedType: string, page?: number, size?: number): Observable<Part[]> {
    const searchUrl = this.urls.createUrlWithQueryParameters(this.baseUrl, 'partsoegning', (queryStringParameters) => {
      queryStringParameters.pushOrAddValue('searchTerm', [searchTerm]);
      queryStringParameters.pushOrReplace('selectedType', selectedType);
      queryStringParameters.pushOrReplace('page', page ? page : 1);
      queryStringParameters.pushOrReplace('size', size ? size : 10);
    });

    const penheder: Part[] = [m.mockProduktionsenhed1, m.mockProduktionsenhed2, m.mockProduktionsenhed3];
    const byggepladser: Part[] = [m.mockByggeplads1, m.mockByggeplads2, m.mockByggeplads3];
    const lokationer: Part[] = [m.mockLokation1, m.mockLokation2, m.mockLokation3];

    let result: Part[] = [];

    switch (selectedType) {
      case 'produktionsenhed':
        result = penheder;
        break;
      case 'byggeplads':
        result = byggepladser;
        break;
      case 'lokation':
        result = lokationer;
        break;
      default:
        console.warn('Unknown selectedType:', selectedType);
    }

    console.log('[FindPartMockService] API call with URL:', searchUrl);

    return of(result).pipe(delay(200));
  }
}
