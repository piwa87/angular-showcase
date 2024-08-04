import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, Observable, Subject, map, takeUntil } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  private tokenSubject$ = new BehaviorSubject<string | null>(null);
  public token$ = this.tokenSubject$.asObservable();

  private destroyed$ = new Subject<void>();

  constructor(private oauthService: OAuthService, private router: Router) {
    this.oauthService.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe((event) => {
        if (event instanceof OAuthErrorEvent) {
          console.error('OAuthErrorEvent Object:', event);
        } else {
          console.warn('OAuthEvent Object:', event);
        }
      });
  }

  public runLoginSequence(authConfig: AuthConfig): void {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => {
      this.oauthService
        .tryLogin()
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          this.isAuthenticatedSubject$.next(
            this.oauthService.hasValidAccessToken()
          );
          if (!this.oauthService.hasValidAccessToken()) {
            this.oauthService.initImplicitFlow();
          }
          this.tokenSubject$.next(this.oauthService.getAccessToken());
        });
    });
  }

  public login(targetUrl?: string) {
    this.oauthService.initLoginFlow(targetUrl || this.router.url);
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  public refresh(): void {
    this.oauthService.silentRefresh();
  }

  public hasValidToken(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  public getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  public onDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject$.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.getToken().pipe(map((token) => !!token));
  }
}
