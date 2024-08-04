import { Component, inject } from '@angular/core';
import { LocalStorageService } from '@at-common/services';
import { CommentsApiService } from '../api-examples/services/comments-api.service';
import { PresentThisComponent } from '../present-this/present-this.component';
import { takeTruthy } from '@at-common/utils';
import { AtMaterialModule } from '@at-common/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AtMaterialModule, PresentThisComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  commentsApiService = inject(CommentsApiService);
  localStorageService = inject(LocalStorageService);

  getAllCommentsAndSaveInLocalStorage() {
    this.commentsApiService
      .getAllComments()
      .pipe(takeTruthy())
      .subscribe((comments) =>
        this.localStorageService.save('comments', comments)
      );
  }

  checkComments() {
    alert(this.localStorageService.hasData('comments'));
  }

  clearCommentsFromLocalStorage() {
    this.localStorageService.clear();
  }
}
