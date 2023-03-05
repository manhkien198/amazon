export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  hasPrime?: number;
}

interface Rating {
  rate: number;
  count: number;
}
