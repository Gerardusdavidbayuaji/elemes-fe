export interface INavigations {
  id: string;
  page_name: string;
}

export interface ICategory {
  id: string;
  image: string;
  category_name: string;
  color: string;
  items: number;
}

export interface ITranding {
  id: string;
  image: string;
  food: string;
  category_name: string;
  rating: number;
  color: string;
}
