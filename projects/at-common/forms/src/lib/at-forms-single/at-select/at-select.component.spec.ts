import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtSelectComponent } from './at-select.component';

describe('AtSelectComponent', () => {
  let component: AtSelectComponent;
  let fixture: ComponentFixture<AtSelectComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    const testFormGroup = new FormGroup({
      testControl: new FormControl(''),
    });

    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = testFormGroup;

    await TestBed.configureTestingModule({
      imports: [
        AtSelectComponent,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: FormGroupDirective, useValue: formGroupDirective },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AtSelectComponent);
    component = fixture.componentInstance;
    component.fcName = 'testControl';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
