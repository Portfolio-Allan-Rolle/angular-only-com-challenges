import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { filters } from '../models/models';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery-filters-panel',
  imports: [MatButtonToggleModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery-filters-panel.component.html',
  styleUrl: './gallery-filters-panel.component.scss',
})
export class GalleryFiltersPanelComponent {
  public allFilters = Object.keys(filters);
  public galleryService = inject(GalleryService);

  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update((value) => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update((value) => !value);
  }

  onSelectFilter(filter: filters) {
    this.galleryService.changeCurrentFilter(filter);
  }
}
