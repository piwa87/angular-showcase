import { Component, Input } from '@angular/core';
import { AtMaterialModule } from '@at-common/forms';

@Component({
  selector: 'at-stroked-button',
  standalone: true,
  imports: [AtMaterialModule],
  templateUrl: './at-stroked-button.component.html',
  styleUrl: './at-stroked-button.component.scss'
})
export class AtStrokedButton {
  @Input({ required: true }) text?: string = '';
  @Input() icon?: string;
  @Input() counter?: number;
}
