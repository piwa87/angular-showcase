import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtEmailInputComponent } from './at-email-input.component';

describe('AtEmailInputComponent', () => {
  let component: AtEmailInputComponent;
  let fixture: ComponentFixture<AtEmailInputComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    const testFormGroup = new FormGroup({
      testControl: new FormControl(''),
    });

    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = testFormGroup;

    await TestBed.configureTestingModule({
      imports: [
        AtEmailInputComponent,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: FormGroupDirective, useValue: formGroupDirective },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AtEmailInputComponent);
    component = fixture.componentInstance;
    component.fcName = 'testControl';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
