import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { AtMaterialModule } from '@at-common/forms';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { navBarRoutes, routes } from '../app.routes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  standalone: true,
  imports: [AsyncPipe, AtMaterialModule, RouterOutlet],
})
export class NavBarComponent {
  @Input() title = '';
  routes: Routes = routes;
  navBarRoutes: Routes = navBarRoutes;
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
