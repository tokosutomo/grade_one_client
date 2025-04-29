import AppAxios from "@/axios/AppAxios";
import { Brand } from "@/types/databases";

export async function fetchBrands(): Promise<Brand[]> {
  try {
    const response = await AppAxios.get("/brand");
    return response.data.data;
  } catch (error) {
    throw new Error("Something wrong");
  }
}
