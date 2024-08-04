import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruthyComponent } from './truthy.component';

describe('TruthyComponent', () => {
  let component: TruthyComponent;
  let fixture: ComponentFixture<TruthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruthyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
