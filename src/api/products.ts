import AppAxios from "@/axios/AppAxios";
import { Product } from "@/types/databases";

export async function fetchProducts(): Promise<Product[]> {
  const response = await AppAxios.get("/products");
  return response.data.data;
}
