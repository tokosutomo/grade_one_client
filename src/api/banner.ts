import AppAxios from "@/axios/AppAxios";
import { Banner } from "@/types/databases";

export async function fetchBanners(): Promise<Banner[]> {
  try {
    const response = await AppAxios.get("/banner");
    return response.data.data;
  } catch (error) {
    throw new Error("Something wrong");
  }
}

export async function postBanner(data: Omit<Banner, "id">): Promise<Banner> {
  try {
    const response = await AppAxios.post("/banner", data);
    return response.data.data;
  } catch (error) {
    throw new Error("Something wrong");
  }
}
