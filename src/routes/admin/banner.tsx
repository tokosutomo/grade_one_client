import { postBanner } from "@/api/banner";
import { Banner } from "@/types/databases";
import loaderCheckIsAdmin from "@/utils/loaderCheckIsAdmin";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { FormEventHandler, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Route = createFileRoute("/admin/banner")({
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

  const addBanner: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { url_image, url_navigation } = e.target as typeof e.target & {
      [K in keyof Banner]: { value: string };
    } & { url_image: { files: File[] } };

    toast.promise(
      async () => {
        try {
          const result = await getUrlImage(url_image.files[0]);

          const data: Omit<Banner, "id"> = {
            url_image: String(result),
            url_navigation: String(url_navigation?.value),
          };

          await postBanner(data);
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
            return `banner Uploaded!`;
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

      <form ref={formRef} onSubmit={addBanner} className="flex flex-col h-full">
        <h1>Input banner</h1>

        <input
          type="file"
          className="file-input w-full max-w-xs"
          name="url_image"
          multiple
          accept="image/*"
        />

        <input
          type="text"
          placeholder="link navigation"
          className="input input-bordered w-full max-w-xs"
          name="url_navigation"
        />

        <button className="btn btn-active btn-primary mt-auto" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
