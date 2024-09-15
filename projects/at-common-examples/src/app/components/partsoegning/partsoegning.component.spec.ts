import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsoegningComponent } from './partsoegning.component';

describe('PartsoegningComponent', () => {
  let component: PartsoegningComponent;
  let fixture: ComponentFixture<PartsoegningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartsoegningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsoegningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
