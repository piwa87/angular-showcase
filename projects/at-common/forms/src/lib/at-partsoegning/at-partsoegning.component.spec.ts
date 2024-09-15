import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtPartsoegningComponent } from './at-partsoegning.component';

describe('AtPartsoegningComponent', () => {
  let component: AtPartsoegningComponent;
  let fixture: ComponentFixture<AtPartsoegningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtPartsoegningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtPartsoegningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
