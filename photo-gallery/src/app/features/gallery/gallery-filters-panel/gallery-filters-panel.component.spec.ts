import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFiltersPanelComponent } from './gallery-filters-panel.component';

describe('GalleryFiltersPanelComponent', () => {
  let component: GalleryFiltersPanelComponent;
  let fixture: ComponentFixture<GalleryFiltersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryFiltersPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryFiltersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
