import { Pipe, PipeTransform } from '@angular/core';
import { IGalleryImage } from '../models/models';
import { filters } from '../models/models';

@Pipe({
  name: 'galleryFilter',
})
export class GalleryFilterPipe implements PipeTransform {
  transform(
    images: IGalleryImage[],
    selectedFilter: filters
  ): IGalleryImage[] | null {
    if (selectedFilter == filters.ALL) {
      return images;
    } else {
      return images.filter((image) => image.type == selectedFilter);
    }
  }
}
