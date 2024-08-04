import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import {
  AtEmailInputForm,
  AtFormNavnRolleForm,
  AtFormsModule,
  AtMaterialModule,
  collectAllValidationErrors,
  printErrors,
} from '@at-common/forms';
import { PresentThisComponent } from '../present-this/present-this.component';

@Component({
  selector: 'app-multi-forms',
  standalone: true,
  imports: [
    AtFormsModule,
    AtMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    PresentThisComponent,
  ],
  templateUrl: './multi-forms.component.html',
  styleUrl: './multi-forms.component.scss',
})
export class MultiFormsComponent implements OnInit {
  fb = inject(FormBuilder);

  fg = this.fb.group({
    navnRolleGroup: AtFormNavnRolleForm,
    email: AtEmailInputForm,
  });

  navnRolleErrors: ValidationErrors | null = collectAllValidationErrors(
    this.fg.controls.navnRolleGroup
  );

  ngOnInit(): void {
    this.fg.controls.navnRolleGroup.valueChanges.subscribe(() => {
      this.navnRolleErrors = collectAllValidationErrors(
        this.fg.controls.navnRolleGroup
      );
    });
  }
  onSubmit(): void {
    this.fg.markAllAsTouched();
    if (this.fg.invalid) {
      console.log('Form is invalid.');
      printErrors(this.fg);
      return;
    }
    console.log('Form valid.\nValue:', this.fg.value);
  }
}
