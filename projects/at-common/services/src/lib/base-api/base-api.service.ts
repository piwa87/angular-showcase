import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUrlService } from './helpers/create-url.service';

export abstract class BaseApiService<T> {
  httpClient = inject(HttpClient);
  urls = inject(CreateUrlService);

  get(url: string): Observable<T> {
    return this.httpClient.get<T>(`${url}`);
  }

  getAll(url: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${url}`);
  }

  post(url: string, item: T): Observable<T> {
    return this.httpClient.post<T>(`${url}`, item);
  }

  put(url: string, item: T): Observable<T> {
    return this.httpClient.put<T>(`${url}`, item);
  }

  delete(url: string): Observable<void> {
    return this.httpClient.delete<void>(`${url}`);
  }

  deleteByItem(url: string, item: T): Observable<T> {
    return this.httpClient.delete<T>(`${url}`, { body: item });
  }
}
