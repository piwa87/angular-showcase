import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CommentsApiService } from './comments-api.service';

describe('CommentsApiService', () => {
  let service: CommentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CommentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
