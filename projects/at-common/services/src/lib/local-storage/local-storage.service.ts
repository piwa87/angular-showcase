import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService<T> {
  save(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data as T));
  }

  load(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  hasData(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  clear(): void {
    localStorage.clear();
  }
}
