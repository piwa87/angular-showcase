import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtRadioGroupComponent } from './at-radio-group.component';

describe('AtRadioGroupComponent', () => {
  let component: AtRadioGroupComponent;
  let fixture: ComponentFixture<AtRadioGroupComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    const testFormGroup = new FormGroup({
      testControl: new FormControl(''),
    });

    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = testFormGroup;

    await TestBed.configureTestingModule({
      imports: [
        AtRadioGroupComponent,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: FormGroupDirective, useValue: formGroupDirective },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AtRadioGroupComponent);
    component = fixture.componentInstance;
    component.fcName = 'testControl';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
