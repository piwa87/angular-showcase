import { Component, Input } from '@angular/core';
import { AtMaterialModule } from '@at-common/forms';

@Component({
  selector: 'at-round-button-with-icon',
  standalone: true,
  imports: [AtMaterialModule],
  templateUrl: './at-round-button-with-icon.component.html',
  styleUrl: './at-round-button-with-icon.component.scss'
})
export class AtRoundButtonWithIcon {
  @Input() icon?: string;
}