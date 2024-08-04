import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtFormNavnRolleComponent } from './at-form-navn-rolle.component';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NavnRolleComponent', () => {
  let component: AtFormNavnRolleComponent;
  let fixture: ComponentFixture<AtFormNavnRolleComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    const testFormGroup = new FormGroup({
      testNavnRolleGroup: new FormGroup({
        navn: new FormControl(''),
        rolle: new FormControl(''),
      }),
    });

    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = testFormGroup;
    await TestBed.configureTestingModule({
      imports: [
        AtFormNavnRolleComponent,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: FormGroupDirective, useValue: formGroupDirective },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AtFormNavnRolleComponent);
    component = fixture.componentInstance;
    component.fgName = 'testNavnRolleGroup';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
