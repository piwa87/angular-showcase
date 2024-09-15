import { Component, Input } from '@angular/core';
import { AtMaterialModule } from '@at-common/forms';

@Component({
  selector: 'at-flat-button',
  standalone: true,
  imports: [AtMaterialModule],
  templateUrl: './at-flat-button.component.html',
  styleUrl: './at-flat-button.component.scss'
})
export class AtFlatButtonComponent {
  @Input({required:true}) text?: string = '';
  @Input() icon?: string;
}
