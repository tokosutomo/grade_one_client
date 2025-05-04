import AppAxios from "@/axios/AppAxios";
import { TestimoniImage } from "@/types/databases";
import { createRoute } from "@tanstack/react-router";
import axios from "axios";
import { FormEventHandler, useRef } from "react";
import { toast } from "react-toastify";
import { RouteComponent as ParentRouteAdmin } from "./admin";

export const Route = createRoute()({
  getParentRoute: () => RouteComponent,
  path: "testimoni",
  component: ParentRouteAdmin,
});

function RouteComponent() {
  const formRef = useRef<HTMLFormElement>(null);

  const getUrlImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "eivmtjw7");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dg8zmn3ne/image/upload/",
      formData
    );

    return response.data.url;
  };

  const addProduct: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { testimoni_image } = e.target as typeof e.target & {
      testimoni_image: { files: File[] };
    };

    toast.promise(
      async () => {
        try {
          const result = await getUrlImage(testimoni_image.files[0]);

          const data: Omit<TestimoniImage, "id"> = {
            url: String(result),
          };

          await AppAxios.post("/testimoni", data);
        } catch (error) {
          console.log(error);
        }
      },
      {
        pending: {
          render() {
            return "Loading...";
          },
        },
        success: {
          render() {
            formRef?.current?.reset();
            return `Product Uploaded!`;
          },
          icon() {
            return "🟢";
          },
        },
        error: {
          render() {
            return "Something Wrong!";
          },
        },
      }
    );
  };
  return (
    <div className="h-screen relative">
      <h1>Input Testimoni</h1>

      <form ref={formRef} onSubmit={addProduct} className="flex flex-col">
        <input
          type="file"
          className="file-input w-full max-w-xs"
          name="testimoni_image"
          multiple
          accept="image/*"
        />

        <button className="btn btn-active btn-primary" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
