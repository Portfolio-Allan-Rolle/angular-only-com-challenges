import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { GalleryFiltersPanelComponent } from './features/gallery/gallery-filters-panel/gallery-filters-panel.component';
import { GalleryImagesComponent } from './features/gallery/gallery-images/gallery-images.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    GalleryFiltersPanelComponent,
    GalleryImagesComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'photo-gallery';
}
