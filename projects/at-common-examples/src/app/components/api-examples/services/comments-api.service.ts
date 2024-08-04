import { Injectable, inject } from '@angular/core';
import { BaseApiService } from '@at-common/services';
import { AppEndpoints } from '../../../app.endpoints';
import { AppConfig } from '../../../services/app-config/app-config.service';

export interface CommentModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommentsApiService extends BaseApiService<CommentModel> {
  appConfig = inject(AppConfig);
  endpoints = inject(AppEndpoints);

  url = this.urls.createUrl(
    this.appConfig.getApiUrl(),
    this.endpoints.COMMENTS
  );

  getComment(id: number) {
    return super.get(`${this.url}/${id}`);
  }

  getAllComments() {
    return super.getAll(this.url);
  }

  postComment(comment: CommentModel) {
    return super.post(this.url, comment);
  }

  updateComment(id: number, comment: CommentModel) {
    return super.put(`${this.url}/${id}`, comment);
  }

  deleteComment(id: number) {
    return super.delete(`${this.url}/${id}`);
  }
}
