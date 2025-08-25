// Models generated from config.dataModels in config/project-config-sample.json
// Keep resource models separate from app/global types as per coding standards.

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export type PetStatus = 'available' | 'pending' | 'sold';

export interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: PetStatus;
}

