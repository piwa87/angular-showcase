import { Observable, filter, pipe, take } from 'rxjs';

export const truthy = <T>() =>
  pipe(
    filter<T | undefined | null>(
      (a: T | undefined | null): a is T => a !== undefined && a !== null
    )
  ) as <T>(source: Observable<T | undefined | null>) => Observable<T>;

export const takeTruthy = <T>(takeCount: number = 1) =>
  pipe(truthy<T>(), take(takeCount));
