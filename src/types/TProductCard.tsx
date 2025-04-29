import { Brand, Photo, Product } from "./databases";

export type TProductCard = Product & { photos: Photo[] } & { brand: Brand };
