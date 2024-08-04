import { TestBed } from '@angular/core/testing';
import { CreateUrlService } from './create-url.service';

describe('CreateUrlService', () => {
  let service: CreateUrlService;
  const testApiUrl = 'http://test-api-url.com';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateUrlService],
    });
    service = TestBed.inject(CreateUrlService);
  });

  describe('createUrl', () => {
    it('should create a URL with the API base URL by default', () => {
      const endpoint = 'my/endpoint';
      const expectedUrl = `${testApiUrl}/${endpoint}`;
      const actualUrl = service.createUrl(testApiUrl, endpoint);

      expect(actualUrl).toBe(expectedUrl);
    });
  });

  describe('createUrlWithQueryParameters', () => {
    it('should create a URL with query parameters', () => {
      const endpoint = 'my/endpoint';
      const expectedUrl = `${testApiUrl}/${endpoint}?param1=value1&param2=value2`;
      const actualUrl = service.createUrlWithQueryParameters(
        testApiUrl,
        endpoint,
        (qs) => {
          qs.pushOrReplace('param1', 'value1');
          qs.pushOrReplace('param2', 'value2');
        }
      );

      expect(actualUrl).toBe(expectedUrl);
    });
  });

  describe('createUrlWithPathVariables', () => {
    it('should create a URL with path variables', () => {
      const endpoint = 'my/endpoint';
      const pathVariables = [123, 'abc', true];
      const expectedUrl = `${testApiUrl}/${endpoint}/123/abc/true`;
      const actualUrl = service.createUrlWithPathVariables(
        testApiUrl,
        endpoint,
        pathVariables
      );

      expect(actualUrl).toBe(expectedUrl);
    });
  });
});
