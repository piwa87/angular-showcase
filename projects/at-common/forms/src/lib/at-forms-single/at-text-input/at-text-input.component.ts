import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { AtMaterialModule } from '../../at-material.module';
import { AceOfBaseClass } from '../../base-classes/ace-of-base';
import { SingleFieldBaseClass } from '../../base-classes/single-field-base';

@Component({
  selector: 'at-text-input',
  standalone: true,
  imports: [CommonModule, AtMaterialModule, ReactiveFormsModule],
  templateUrl: './at-text-input.component.html',
  styleUrl: './at-text-input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtTextInputComponent extends SingleFieldBaseClass {
  @Input() label: string = '';
}
