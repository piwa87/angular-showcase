import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppEndpoints {
  public readonly POSTS: string = 'posts';
  public readonly COMMENTS: string = 'comments';
  public readonly PHOTOS: string = 'photos';
}
