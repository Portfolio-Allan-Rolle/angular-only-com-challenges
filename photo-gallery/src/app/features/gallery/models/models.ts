export enum filters {
  'ALL' = 'ALL',
  'FASHION' = 'FASHION',
  'PETS' = 'PETS',
  'FOOD' = 'FOOD',
  'TRAVEL' = 'TRAVEL',
  'ARCHITECTURE' = 'ARCHITECTURE',
}

export interface IGalleryImage {
  url: string;
  type: filters;
}

export const data: IGalleryImage[] = [
  {
    url: 'istockphoto-992637094-1024x1024-pets (1)-min.jpg',
    type: filters.PETS,
  },
  {
    url: 'istockphoto-992637094-1024x1024-pets (2)-min.jpg',
    type: filters.PETS,
  },
  {
    url: 'istockphoto-992637094-1024x1024-pets (3)-min.jpg',
    type: filters.PETS,
  },
  {
    url: 'istockphoto-992637094-1024x1024-pets (4)-min.jpg',
    type: filters.PETS,
  },
  {
    url: 'istockphoto-992637094-1024x1024-pets (5)-min.jpg',
    type: filters.PETS,
  },
  {
    url: 'istockphoto-1049342168-1024x1024-food (1)-min.jpg',
    type: filters.FOOD,
  },
  {
    url: 'istockphoto-1049342168-1024x1024-food (2)-min.jpg',
    type: filters.FOOD,
  },
  {
    url: 'istockphoto-1049342168-1024x1024-food (3)-min.jpg',
    type: filters.FOOD,
  },
  {
    url: 'istockphoto-1049342168-1024x1024-food (4)-min.jpg',
    type: filters.FOOD,
  },
  {
    url: 'istockphoto-1049342168-1024x1024-food (5)-min.jpg',
    type: filters.FOOD,
  },
  {
    url: 'istockphoto-1440711628-1024x1024-architecture (1)-min.jpg',
    type: filters.ARCHITECTURE,
  },
  {
    url: 'istockphoto-1440711628-1024x1024-architecture (2)-min.jpg',
    type: filters.ARCHITECTURE,
  },
  {
    url: 'istockphoto-1744720471-1024x1024-fashion (2)-min.jpg',
    type: filters.FASHION,
  },
  {
    url: 'istockphoto-1744720471-1024x1024-fashion (3)-min.jpg',
    type: filters.FASHION,
  },
  {
    url: 'istockphoto-1744720471-1024x1024-fashion (4)-min.jpg',
    type: filters.FASHION,
  },
  {
    url: 'istockphoto-1744720471-1024x1024-fashion (5)-min.jpg',
    type: filters.FASHION,
  },
  {
    url: 'istockphoto-2038951376-1024x1024-travel (1)-min.jpg',
    type: filters.TRAVEL,
  },
  {
    url: 'istockphoto-2038951376-1024x1024-travel (2)-min.jpg',
    type: filters.TRAVEL,
  },
  {
    url: 'istockphoto-2038951376-1024x1024-travel (3)-min.jpg',
    type: filters.TRAVEL,
  },
  {
    url: 'istockphoto-2038951376-1024x1024-travel (4)-min.jpg',
    type: filters.TRAVEL,
  },
  {
    url: 'istockphoto-2038951376-1024x1024-travel (5)-min.jpg',
    type: filters.TRAVEL,
  },
];
