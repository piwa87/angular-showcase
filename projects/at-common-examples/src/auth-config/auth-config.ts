import { AuthConfig } from 'angular-oauth2-oidc';

export const commonExamplesAuthConfig: AuthConfig = {
  clientId: 'ATFrontendCommonExamplesLocal',
  scope: 'openid profile offline_access',
  responseType: 'code',
  issuer: 'https://ssoidp-ucc.atbm-cloud.dk',
  redirectUri: 'http://localhost:4200/login-example',
  postLogoutRedirectUri: 'http://localhost:4200/forside',
};
