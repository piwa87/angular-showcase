import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'at-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './at-spinner.component.html',
  styleUrls: ['./at-spinner.component.scss']
})
export class AtSpinnerComponent {
  @Input() inlineSpinner: boolean = false;
  @Input() diameter: number = 100;
}
