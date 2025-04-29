export interface Photo {
  id: string;
  url: string;
  productId: string;
}

export interface Product {
  id: string;
  name: string;
  imei: number;
  ram?: number;
  memory: number;
  price: number;
  description: string;
  photos: Photo[];
  isSold: boolean;
  imageReview?: string;
  createdAt: Date;
  updatedAt: Date;
  brandId: string;
  grade: string;
  stock: number;
  orderId?: string;
}

export interface Order {
  id: string;
  products: Product[];
  paymentMethod: string;
  locationBrowser: string;
  locationInput: string;
  total: number;
}

export interface Brand {
  id: string;
  name: string;
  url: string;
  products: Product[];
}

export interface News {
  id: string;
  url: string;
}

export interface TestimoniImage {
  id: string;
  url: string;
}
