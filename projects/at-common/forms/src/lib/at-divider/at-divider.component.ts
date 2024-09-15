import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'at-divider',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './at-divider.component.html',
  styleUrls: ['./at-divider.component.scss']
})
export class AtDividerComponent {
  @Input() inset: boolean = false;
  @Input() vertical: boolean = false;
  @Input() margin: string = '';

  setMargin() {
    if (this.margin) {
      return `margin-bottom: ${this.margin};`;
    }
    return '';
  }
}
