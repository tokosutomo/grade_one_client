import AppAxios from "@/axios/AppAxios";
import { TestimoniImage } from "@/types/databases";
import loaderCheckIsAdmin from "@/utils/loaderCheckIsAdmin";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { FormEventHandler, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Route = createFileRoute("/admin/testimoni")({
  component: RouteComponent,
  loader: loaderCheckIsAdmin,
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

  const addTestimoni: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { testimoni_image } = e.target as typeof e.target & {
      testimoni_image: { files: File[] };
    };

    toast.promise(
      async () => {
        
        try {
          for (const photo of testimoni_image.files) {
            const result = await getUrlImage(photo);
            
            
            const data: Omit<TestimoniImage, "id"> = {
              url: String(result),
            };
            
            await AppAxios.post("/testimoni", data);
          }
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
            return `Testimoni Uploaded!`;
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
      <ToastContainer limit={2} />

      <form
        ref={formRef}
        onSubmit={addTestimoni}
        className="flex flex-col h-full"
      >
        <h1>Input Testimoni</h1>

        <input
          type="file"
          className="file-input w-full max-w-xs"
          name="testimoni_image"
          multiple
          accept="image/*"
        />

        <button className="btn btn-active btn-primary mt-auto" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
