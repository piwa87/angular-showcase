import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export function authSecureRoutesFactory(
  secureRoutes: string[]
): OAuthModuleConfig {
  return {
    resourceServer: {
      allowedUrls: secureRoutes,
      sendAccessToken: true,
    },
  };
}
