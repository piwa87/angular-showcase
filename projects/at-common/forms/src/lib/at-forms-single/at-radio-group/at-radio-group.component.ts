import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { AtMaterialModule } from '../../at-material.module';
import { SingleFieldBaseClass } from '../../base-classes/single-field-base';

@Component({
  selector: 'at-radio-group',
  standalone: true,
  imports: [AtMaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './at-radio-group.component.html',
  styleUrl: './at-radio-group.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtRadioGroupComponent extends SingleFieldBaseClass {
  @Input() label?: string;
  @Input({ required: true }) options: RadioButtonModel[] = [];
  @Input() readOnly: boolean = false;
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';
}

export interface RadioButtonModel {
  label?: string;
  value?: string | boolean | null;
}
