import { Injectable } from '@angular/core';
import { data, IBlogArticle } from '../models/data';
import { catchError, filter, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private mockData = data;

  loadData(): Observable<IBlogArticle[]> {
    return of(this.mockData).pipe(
      catchError((err) => {
        throw 'Error fetching articles: ' + err;
      }),
    );
  }

  getArticle(id: string): Observable<IBlogArticle> {
    return from(this.mockData).pipe(
      filter((article: IBlogArticle) => article.id === id),
      catchError((err) => {
        throw 'Error fetching single article: ' + err;
      }),
    );
  }
}
