import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AtTextsModule } from '@at-common/texts';

@Component({
  selector: 'at-modal-template',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, AtTextsModule, CommonModule, MatButtonModule],
  templateUrl: './at-modal-template.component.html',
  styleUrls: ['./at-modal-template.component.scss']
})
export class AtModalTemplateComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      content: string;
      buttonText: string;
      innerHTML?: boolean;
    }
  ) {}
}
