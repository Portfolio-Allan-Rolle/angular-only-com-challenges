import { Injectable, signal } from '@angular/core';
import { data } from '../models/models';
import { filters } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  currentFilter = signal(filters.ALL);
  public selectedFilter = signal(filters.ALL);

  loadData() {
    return data;
  }

  changeCurrentFilter(filter: filters) {
    this.currentFilter.set(filter);
  }
}
