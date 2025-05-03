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

export async function fetchProduct(url: string): Promise<TProductCard> {
  try {
    const response = await AppAxios.get(`/product/${url}`);
    return response.data.data;
  } catch (error) {
    throw new Error("something wrong");
  }
}

export async function fetchProductsByQuery(
  query: string | string[] | undefined
): Promise<TProductCard[]> {
  try {
    if (query === undefined) {
      const response = await AppAxios.get(`/products`);
      return response.data.data;
    } else {
      const response = await AppAxios.get(`/products?q=${query}`);
      return response.data.data;
    }
  } catch (error) {
    throw new Error("something wrong");
  }
}

export async function fetchProductsByLocalStorage(): Promise<TProductCard[]> {
  const productsIdLocal = localStorage.getItem("productOrder");

  if (productsIdLocal === null)
    throw Error("You Don't have product to processed");

  const productIdOrderParse = JSON.parse(productsIdLocal) as string[];

  let products = [] as TProductCard[];

  for (const productIdOrder of productIdOrderParse) {
    const response = await AppAxios.get(`/product/${productIdOrder}`);
    products.push(response.data.data);
  }

  return products;
}
