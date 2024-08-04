import { Injectable } from '@angular/core';
import { QueryStringParameters } from './query-string-parameters';
import { UrlBuilder } from './url-builder';

@Injectable({
  providedIn: 'root',
})
export class CreateUrlService {
  public createUrl(baseUrl: string, endpoint: string): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(baseUrl, endpoint);
    return urlBuilder.toString();
  }

  public createUrlWithQueryParameters(
    baseUrl: string,
    endpoint: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(baseUrl, endpoint);

    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }

    return urlBuilder.toString();
  }

  public createUrlWithPathVariables(
    baseUrl: string,
    endpoint: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';

    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString()
        )}`;
      }
    }

    const urlBuilder: UrlBuilder = new UrlBuilder(
      baseUrl,
      `${endpoint}${encodedPathVariablesUrl}`
    );

    return urlBuilder.toString();
  }
}
