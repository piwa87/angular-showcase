import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ATFrontendCommon - Examples';
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'mat-typography');
  }
}
