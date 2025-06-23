import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleExcerptComponent } from './blog-article-excerpt.component';

describe('BlogArticleExcerptComponent', () => {
  let component: BlogArticleExcerptComponent;
  let fixture: ComponentFixture<BlogArticleExcerptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticleExcerptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticleExcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
