import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PresentThisComponent } from '../present-this/present-this.component';
import { DateFunctionsComponent } from './date-functions/date-functions.component';
import { KebabComponent } from './kebab/kebab.component';
import { TruthyComponent } from './truthy/truthy.component';

@Component({
  selector: 'app-utils',
  standalone: true,
  templateUrl: './utils.component.html',
  styleUrl: './utils.component.scss',
  imports: [
    CommonModule,
    PresentThisComponent,
    TruthyComponent,
    DateFunctionsComponent,
    KebabComponent,
  ],
})
export class UtilsComponent {}
