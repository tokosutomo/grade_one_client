import AppAxios from "@/axios/AppAxios";
import { TProductCard } from "@/types/TProductCard";

export async function fetchProducts(): Promise<TProductCard[]> {
  try {
    const response = await AppAxios.get("/products");
    return response.data.data;
  } catch (error) {
    throw new Error("something wrong");
  }
}
