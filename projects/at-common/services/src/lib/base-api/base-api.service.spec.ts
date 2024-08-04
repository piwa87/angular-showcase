import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BaseApiService } from './base-api.service';

describe('BaseApiService', () => {
  let service: BaseApiService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BaseApiService],
    });
    service = TestBed.inject(BaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
