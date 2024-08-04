import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AtModalTemplateComponent } from './at-modal-template.component';

describe('AtModalTemplateComponent', () => {
  let component: AtModalTemplateComponent;
  let fixture: ComponentFixture<AtModalTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AtModalTemplateComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { title: '', content: '', buttonText: '' } }]
    });
    fixture = TestBed.createComponent(AtModalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
