import AppAxios from "@/axios/AppAxios";

export const getAllTestimoni = async () => {
  try {
    const response = await AppAxios.get(`/testimoni`);
    return response.data.data;
  } catch (error) {
    throw new Error("something wrong");
  }
};
