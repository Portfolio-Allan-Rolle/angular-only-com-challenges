import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticlesListComponent } from './blog-articles-list.component';

describe('BlogArticlesListComponent', () => {
  let component: BlogArticlesListComponent;
  let fixture: ComponentFixture<BlogArticlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticlesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
