import { TestBed } from '@angular/core/testing';
import { AtTextsModule } from './at-texts.module';

describe('AtTextsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AtTextsModule],
    });
  });

  it('should create the module', () => {
    const module = TestBed.inject(AtTextsModule);
    expect(module).toBeTruthy();
  });
});
