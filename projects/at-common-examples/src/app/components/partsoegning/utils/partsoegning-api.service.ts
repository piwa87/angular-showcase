import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Part } from '../../../../../../at-common/forms/src/lib/at-partsoegning/part.model';
import * as m from './partsoegning.mock-data';

@Injectable({
  providedIn: 'root'
})
export class PartsoegningApiService {
  searchService(searchTerm: string, selectedType: string): Observable<Part[]> {
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

    console.log('[FindPartMockService] API call with:', searchTerm, 'and type:', selectedType);

    return of(result).pipe(delay(200));
  }
}
