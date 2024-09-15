import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AtFormsModule, AtMaterialModule } from '@at-common/forms';
import { takeTruthy } from '@at-common/utils';
import { catchError } from 'rxjs';
import { PresentThisComponent } from '../present-this/present-this.component';
import { CommentModel, CommentsApiService } from './services/comments-api.service';

@Component({
  selector: 'app-api-examples',
  standalone: true,
  imports: [AtFormsModule, AtMaterialModule, CommonModule, PresentThisComponent, ReactiveFormsModule],
  styleUrl: './api-examples.component.scss',
  templateUrl: './api-examples.component.html'
})
export class ApiExamplesComponent {
  singleComment: CommentModel = {} as CommentModel;
  allComments: CommentModel[] = [];

  commentsApiService = inject(CommentsApiService);

  fb = inject(FormBuilder);
  fg = this.fb.group({
    commentId: new FormControl<number | null>(null, [Validators.min(1), Validators.max(500)]),
    commentBody: new FormControl<string | null>('')
  });

  // GET

  getComment(id: number) {
    this.commentsApiService
      .getComment(id)
      .pipe(
        takeTruthy(),
        catchError((err) => {
          this.singleComment = {
            id: id,
            body: 'ERROR: ' + err.message
          } as CommentModel;
          return [];
        })
      )
      .subscribe((comment) => {
        this.singleComment = comment;
      });
  }

  getAllComments() {
    this.commentsApiService
      .getAllComments()
      .pipe(takeTruthy())
      .subscribe((comments) => {
        this.allComments = comments;
      });
  }

  clearAllComments() {
    this.singleComment = {} as CommentModel;
    this.allComments = [];
  }

  // POST & PUT

  exampleComment: CommentModel = {
    postId: 56,
    id: 500,
    name: 'John Doe',
    email: 'random@email.com',
    body: ''
  };

  private updateCommentBody() {
    this.exampleComment.body = this.fg.controls.commentBody.value || '';
  }

  responseCommentFromServer: CommentModel = {} as CommentModel;

  postComment(comment: CommentModel) {
    this.updateCommentBody();
    this.commentsApiService.postComment(comment).subscribe((comment) => {
      this.responseCommentFromServer = comment;
    });
  }

  updateComment(id: number, comment: CommentModel) {
    this.updateCommentBody();
    this.commentsApiService.updateComment(id, comment).subscribe((comment) => {
      this.responseCommentFromServer = comment;
    });
  }

  // DELETE

  deletedCommentStatus = {
    id: 0,
    status: 'INIT'
  };

  deleteComment(id: number) {
    this.commentsApiService.deleteComment(id).subscribe(() => {
      this.deletedCommentStatus.id = id;
      this.deletedCommentStatus.status = 'DELETED';
      this.responseCommentFromServer = {} as CommentModel;
    });
  }
}
