import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { authSecureRoutesFactory } from '../../../at-common/auth/src/lib/auth-secure-routes.factory';
import { routes } from './app.routes';

const secureRoutes = ['https://jsonplaceholder.typicode.com'];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    provideOAuthClient(authSecureRoutesFactory(secureRoutes)),
  ],
};
