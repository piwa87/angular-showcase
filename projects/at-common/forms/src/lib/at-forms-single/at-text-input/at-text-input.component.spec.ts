import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtTextInputComponent } from './at-text-input.component';

describe('AtTextInputComponent', () => {
  let component: AtTextInputComponent;
  let fixture: ComponentFixture<AtTextInputComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    const testFormGroup = new FormGroup({
      testControl: new FormControl(''),
    });

    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = testFormGroup;

    await TestBed.configureTestingModule({
      imports: [
        AtTextInputComponent,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: FormGroupDirective, useValue: formGroupDirective },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AtTextInputComponent);
    component = fixture.componentInstance;
    component.fcName = 'testControl';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
