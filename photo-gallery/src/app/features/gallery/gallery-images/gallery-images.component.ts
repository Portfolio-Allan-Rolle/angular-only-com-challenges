import { Component, inject, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GalleryService } from '../services/gallery.service';
import { GalleryFilterPipe } from '../pipes/gallery-filter.pipe';

@Component({
  selector: 'app-gallery-images',
  imports: [MatGridListModule, GalleryFilterPipe],
  templateUrl: './gallery-images.component.html',
  styleUrl: './gallery-images.component.scss',
})
export class GalleryImagesComponent implements OnInit {
  public images = inject(GalleryService).loadData();
  public filter = inject(GalleryService).currentFilter;
  public breakpoint!: number | string;

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 3;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 3;
  }
}
