import { Injectable } from '@angular/core';
import { data, IBlogArticle } from '../models/data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private mockData = data;

  loadData(): Observable<IBlogArticle[]> {
    return of(this.mockData);
  }
}
