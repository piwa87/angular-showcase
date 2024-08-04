import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtStylesShowdownComponent } from './at-styles-showdown.component';

describe('AtStylesShowdownComponent', () => {
  let component: AtStylesShowdownComponent;
  let fixture: ComponentFixture<AtStylesShowdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtStylesShowdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtStylesShowdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
