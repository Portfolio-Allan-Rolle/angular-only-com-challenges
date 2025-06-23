import { Component, input } from '@angular/core';
import { IBlogArticle } from '../../models/data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-article-excerpt',
  imports: [RouterLink],
  templateUrl: './blog-article-excerpt.component.html',
  styleUrl: './blog-article-excerpt.component.scss',
})
export class BlogArticleExcerptComponent {
  excerpt = input.required<IBlogArticle>();
}
