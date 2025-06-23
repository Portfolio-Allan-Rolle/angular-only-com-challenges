import { Component, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IBlogArticle } from '../../models/data';

@Component({
  selector: 'app-blog-article-full',
  imports: [RouterLink],
  templateUrl: './blog-article-full.component.html',
  styleUrl: './blog-article-full.component.scss',
})
export class BlogArticleFullComponent {
  public route!: ActivatedRoute;
  article = input.required<IBlogArticle>();
}
