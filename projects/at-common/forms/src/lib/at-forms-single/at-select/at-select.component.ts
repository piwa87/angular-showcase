import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { AtMaterialModule } from '../../at-material.module';
import { SingleFieldBaseClass } from '../../base-classes/single-field-base';

@Component({
  selector: 'at-select',
  standalone: true,
  imports: [AtMaterialModule, ReactiveFormsModule],
  templateUrl: './at-select.component.html',
  styleUrl: './at-select.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtSelectComponent extends SingleFieldBaseClass {
  @Input() label: string = '';
  @Input() enableEmptyOption: boolean = false;
  @Input() items: KeyValue<any, string>[] = [];
}
