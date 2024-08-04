import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  private appConfig = {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  };

  getApiUrl(): string {
    return this.appConfig.apiUrl;
  }
}
