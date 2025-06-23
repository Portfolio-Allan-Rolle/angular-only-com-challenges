import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogArticleExcerptComponent } from '../../ui-components/blog-article-excerpt/blog-article-excerpt.component';
import { IBlogArticle } from '../../models/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-articles-list',
  imports: [BlogArticleExcerptComponent],
  templateUrl: './blog-articles-list.component.html',
  styleUrl: './blog-articles-list.component.scss',
})
export default class BlogArticlesListComponent implements OnInit, OnDestroy {
  public blogService = inject(BlogService);
  public excerptsSubscription!: Subscription;
  public excerpts!: IBlogArticle[];

  ngOnInit(): void {
    this.excerptsSubscription = this.blogService.loadData().subscribe({
      next: (res) => (this.excerpts = res),
      error: (err) => console.warn(err),
    });
  }
  ngOnDestroy(): void {
    this.excerptsSubscription.unsubscribe();
  }
}
