import AppAxios from "@/axios/AppAxios";
import { IOrderBody } from "@/sections/order/TotalNav";
import { Order } from "@/types/databases";

export async function postOrder(data: IOrderBody) {
  try {
    const response = await AppAxios.post("/order", data);

    return response.data.data;
  } catch (error) {
    throw new Error("Something wrong");
  }
}



export default async function getOrders(): Promise<Order[]> {
  try {
    const response = await AppAxios.get("/orders");

    return response.data.data;
  } catch (error) {
    throw new Error("Something wrong");
  }
}
