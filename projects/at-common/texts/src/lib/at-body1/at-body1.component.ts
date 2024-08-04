import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'at-body1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './at-body1.component.html',
  styleUrls: ['./at-body1.component.scss']
})
export class AtBody1Component {
  @Input() margin: boolean = false;
}
