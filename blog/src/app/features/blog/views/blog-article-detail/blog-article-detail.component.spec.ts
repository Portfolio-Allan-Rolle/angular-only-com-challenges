import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleDetailComponent } from './blog-article-detail.component';

describe('BlogArticleDetailComponent', () => {
  let component: BlogArticleDetailComponent;
  let fixture: ComponentFixture<BlogArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticleDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
