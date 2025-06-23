import { Component, inject, OnInit } from '@angular/core';
import { BlogArticleFullComponent } from '../../ui-components/blog-article-full/blog-article-full.component';
import { BlogService } from '../../services/blog.service';
import { IBlogArticle } from '../../models/data';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-article-detail',
  imports: [BlogArticleFullComponent],
  templateUrl: './blog-article-detail.component.html',
  styleUrl: './blog-article-detail.component.scss',
})
export default class BlogArticleDetailComponent implements OnInit {
  public blogService = inject(BlogService);
  public route = inject(ActivatedRoute);
  public selectedArticleSubscription!: Subscription;
  public selectedArticle!: IBlogArticle;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.selectedArticleSubscription = this.blogService
      .getArticle(id)
      .subscribe({
        next: (res) => (this.selectedArticle = res),
        error: (err) => console.warn(err),
      });
  }
}
