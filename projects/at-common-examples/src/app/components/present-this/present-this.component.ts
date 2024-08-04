import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'present-this',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './present-this.component.html',
  styleUrl: './present-this.component.scss',
})
export class PresentThisComponent {
  @Input() legend: string = '';
}
