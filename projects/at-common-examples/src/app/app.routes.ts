import { Routes } from '@angular/router';
import { ApiExamplesComponent } from './components/api-examples/api-examples.component';
import { LoginExampleComponent } from './components/login-example/login-example.component';
import { ModalComponent } from './components/modal/modal.component';
import { MultiFormsComponent } from './components/multi-forms/multi-forms.component';
import { PartsoegningComponent } from './components/partsoegning/partsoegning.component';
import { ServicesComponent } from './components/services/services.component';
import { SingleFormsComponent } from './components/single-forms/single-forms.component';
import { StartComponent } from './components/start/start.component';
import { StylingComponent } from './components/styling/styling.component';
import { UtilsComponent } from './components/utils/utils.component';

const utilRoutes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'start' }];

export const navBarRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'partsøgning', component: PartsoegningComponent },
  { path: 'single-forms', component: SingleFormsComponent },
  { path: 'multi-forms', component: MultiFormsComponent },
  { path: 'utils', component: UtilsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'api-examples', component: ApiExamplesComponent },
  { path: 'login-example', component: LoginExampleComponent },
  { path: 'styling', component: StylingComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'forside', redirectTo: 'start' }
];

export const routes: Routes = utilRoutes.concat(navBarRoutes);
