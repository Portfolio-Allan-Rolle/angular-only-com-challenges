import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleFullComponent } from './blog-article-full.component';

describe('BlogArticleFullComponent', () => {
  let component: BlogArticleFullComponent;
  let fixture: ComponentFixture<BlogArticleFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticleFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
