import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@at-common/services';
import { Observable, map } from 'rxjs';
import { Part } from '../../../../../../at-common/forms/src/lib/at-partsoegning/models/part.model';
import { PartsoegningResponse } from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class PartsoegningApiService extends BaseApiService<PartsoegningResponse> {
  private baseUrl: string = '';

  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }

  searchParts(searchTerm: string, selectedType: string, page: number, size: number): Observable<PartsoegningResponse> {
    if (this.baseUrl === '') {
      throw new Error('Base URL is not set');
    }

    this.showActualUrlInConsole(searchTerm, selectedType, page + 1, size);

    const url = `https://requestly.tech/api/mockv2/searchPart/${selectedType}?username=user1726492686289&`;

    return this.httpClient.get<Part[]>(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<Part[]>) => {
        const result: PartsoegningResponse = {
          data: response.body ?? [],
          paginationInfo: JSON.parse(response.headers.get('x-pagination') ?? '')
        };
        return result;
      })
    );
  }

  private showActualUrlInConsole(searchTerm: string, selectedType: string, page: number, size: number) {
    const searchUrl = this.urls.createUrlWithQueryParameters(this.baseUrl, 'partsoegning', (queryStringParameters) => {
      queryStringParameters.pushOrReplace('searchTerm', searchTerm);
      queryStringParameters.pushOrReplace('selectedType', selectedType);
      queryStringParameters.pushOrReplace('page', page);
      queryStringParameters.pushOrReplace('size', size);
    });
    console.log('True URL: ', searchUrl);
  }
}
