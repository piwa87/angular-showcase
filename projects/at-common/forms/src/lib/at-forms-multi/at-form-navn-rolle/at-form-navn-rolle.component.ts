import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AtMaterialModule } from '../../at-material.module';
import { MultipleFieldBaseClass } from '../../base-classes/multiple-field-base';

@Component({
  selector: 'at-form-navn-rolle',
  standalone: true,
  imports: [ReactiveFormsModule, AtMaterialModule, CommonModule],
  templateUrl: './at-form-navn-rolle.component.html',
  styleUrl: './at-form-navn-rolle.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtFormNavnRolleComponent extends MultipleFieldBaseClass {}

export const AtFormNavnRolleForm = new FormGroup({
  navn: new FormControl<string | null>(null, [Validators.required]),
  rolle: new FormControl<string | null>(null, [Validators.required]),
});
