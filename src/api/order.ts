import AppAxios from "@/axios/AppAxios";
import { IOrderBody } from "@/sections/order/TotalNav";

export async function postOrder(data: IOrderBody) {
  try {
    const response = await AppAxios.post("/order", data);

    return response.data.data;
  } catch (error) {
    throw new Error("Something wrong");
  }
}
