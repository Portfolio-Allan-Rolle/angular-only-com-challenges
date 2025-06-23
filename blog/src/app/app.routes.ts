import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blog',
    loadComponent: () =>
      import(
        './features/blog/views/blog-articles-list/blog-articles-list.component'
      ),
  },
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  {
    path: 'blog/article/:id',
    loadComponent: () =>
      import(
        './features/blog/views/blog-article-detail/blog-article-detail.component'
      ),
  },
];
