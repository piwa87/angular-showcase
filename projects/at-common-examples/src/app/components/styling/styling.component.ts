import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AtMaterialModule } from '@at-common/forms';
import {
  PrimaryColorDirective,
  SecondaryColorDirective,
} from '@at-common/styling';
import { PresentThisComponent } from '../present-this/present-this.component';
import { AtTextsModule } from '@at-common/texts';

@Component({
  selector: 'app-styling',
  standalone: true,
  imports: [
    AtMaterialModule,
    AtTextsModule,
    CommonModule,
    PrimaryColorDirective,
    SecondaryColorDirective,
    PresentThisComponent,
  ],
  templateUrl: './styling.component.html',
  styleUrl: './styling.component.scss',
})
export class StylingComponent {}
