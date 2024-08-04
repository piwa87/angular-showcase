import { Component } from '@angular/core';
import { convertToInternationalKebab } from '@at-common/utils';
import { CommonModule } from '@angular/common';
import { AtMaterialModule } from '@at-common/forms';

@Component({
  selector: 'app-kebab',
  standalone: true,
  imports: [CommonModule, AtMaterialModule],
  templateUrl: './kebab.component.html',
})
export class KebabComponent {
  displayedValues: string[] = [];
  stringValues: string[] = [
    'HelloWorld',
    'ExampleInput',
    'Æble',
    'Ønske',
    'Sø',
    'Åben',
  ];
  isTransformApplied = false;

  constructor() {
    this.updateDisplayedValues();
  }

  onToggle(event: any) {
    this.isTransformApplied = event.checked;

    this.updateDisplayedValues();
  }

  updateDisplayedValues() {
    this.displayedValues = this.isTransformApplied
      ? this.stringValues.map((value) => convertToInternationalKebab(value))
      : this.stringValues;
  }

  get toggleText() {
    return this.isTransformApplied
      ? 'Kebab formatting enabled'
      : 'Kebab formatting disabled';
  }
}
