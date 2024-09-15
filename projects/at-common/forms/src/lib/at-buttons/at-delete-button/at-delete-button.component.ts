import { Component, Input } from '@angular/core';
import { AtMaterialModule } from '@at-common/forms';

@Component({
  selector: 'at-delete-button',
  standalone: true,
  imports: [AtMaterialModule],
  templateUrl: './at-delete-button.component.html',
  styleUrl: './at-delete-button.component.scss'
})
export class AtDeleteButtonComponent {
  @Input() isDisabled: boolean = false;
}
