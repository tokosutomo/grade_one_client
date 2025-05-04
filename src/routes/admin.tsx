import "@/sections/admin/app.css";
import { fetchBrands } from "@/api/brand";
import AppAxios from "@/axios/AppAxios";
import { Brand, Product } from "@/types/databases";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { FormEventHandler, useRef } from "react";
import { toast } from "react-toastify";

type CreateProductDTO = {
  name: string;
  imei: number;
  ram: number;
  memory: number;
  description: string;
  price: number;
  grade: string;
  brandId: string;
  stock: number;
  photos_url: string;
};

export const Route = createFileRoute("/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    isLoading: isLoadingBrands,
    error,
    data: brands,
  } = useQuery<Brand[], Error>({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });

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

    const {
      name,
      imei,
      ram,
      memory,
      description,
      price,
      brandId,
      grade,
      photos,
      stock,
    } = e.target as typeof e.target & {
      [K in keyof Product]: { value: string };
    } & { photos: { files: File[] } };

    toast.promise(
      async () => {
        const photos_url = [];
        try {
          for (const photo of photos.files) {
            const result = await getUrlImage(photo);
            photos_url.push(result);
          }

          const data: CreateProductDTO = {
            name: name.value,
            imei: Number(imei.value),
            ram: Number(ram?.value),
            memory: Number(memory.value),
            description: description.value,
            price: Number(price.value),
            grade: grade.value,
            brandId: brandId.value,
            stock: Number(stock.value),
            photos_url: photos_url.join(","),
          };

          await AppAxios.post("/product", data);
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
      <h1>Input Product</h1>

      <form ref={formRef} onSubmit={addProduct} className="flex flex-col">
        <input
          type="text"
          placeholder="name"
          className="input input-bordered w-full max-w-xs"
          name="name"
        />

        <input
          type="number"
          placeholder="imei"
          className="input input-bordered w-full max-w-xs"
          name="imei"
        />

        <input
          type="number"
          placeholder="ram"
          className="input input-bordered w-full max-w-xs"
          name="ram"
        />
        <input
          type="number"
          placeholder="memory"
          className="input input-bordered w-full max-w-xs"
          name="memory"
        />

        <textarea
          className="textarea textarea-bordered max-w-xs h-auto min-h-56"
          placeholder="description"
          name="description"
        ></textarea>

        <input
          type="number"
          placeholder="price"
          className="input input-bordered w-full max-w-xs"
          name="price"
        />

        <input
          type="file"
          className="file-input w-full max-w-xs"
          name="photos"
          multiple
          accept="image/*"
        />

        <select
          className="select select-bordered w-full max-w-xs"
          name="brandId"
          defaultValue={"None"}
          onChange={() => {}}
        >
          <option disabled value={"none"}>
            Select Brand
          </option>
          {isLoadingBrands ? (
            <option disabled>Loading...</option>
          ) : (
            brands?.map((data, i) => (
              <option key={i} value={data.id}>
                {data.name}
              </option>
            ))
          )}
        </select>

        <input
          type="text"
          placeholder="grade"
          className="input input-bordered w-full max-w-xs"
          name="grade"
        />

        <input
          type="number"
          placeholder="stok"
          className="input input-bordered w-full max-w-xs"
          name="stock"
        />

        <button className="btn btn-active btn-primary" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
