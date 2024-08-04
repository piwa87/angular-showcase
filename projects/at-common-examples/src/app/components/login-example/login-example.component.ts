import { Component, OnInit } from '@angular/core';
import { AuthService } from '@at-common/auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AtMaterialModule } from '@at-common/forms';
import { commonExamplesAuthConfig } from '../../../auth-config/auth-config';

@Component({
  selector: 'app-login-example',
  standalone: true,
  imports: [CommonModule, AtMaterialModule],
  templateUrl: './login-example.component.html',
  styleUrl: './login-example.component.scss',
})
export class LoginExampleComponent {
  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.runLoginSequence(commonExamplesAuthConfig);
  }

  callApi() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((response) => {
        console.log('response', response);
      });
  }

  logout() {
    this.authService.logout();
  }
}
