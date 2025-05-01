"use client";

import AppAxios from "@/axios/AppAxios";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import SearchBar from "./SearchBar";

export const getProductsByFiltered = async (query: string) => {
  const response = await AppAxios.get(`/products?q=${query}`);
  return response.data.data;
};

export default function NavbarSectionSearch({
  query,
}: {
  query: string | undefined;
}) {
  const [searchValue, setSearchValue] = useState<string>(
    query === undefined ? "" : query
  );
  const router = useRouter();

  useEffect(() => {
    const delayFetch = setTimeout(async () => {
      //   const products = await getProductsByFiltered(searchValue);

      if (searchValue.length < 1) {
        router.navigate({ to: `/search` });
      } else {
        router.navigate({ to: `/search?q=${searchValue}` });
      }
    }, 500);

    return () => clearTimeout(delayFetch);
  }, [searchValue]);

  return (
    <nav className="flex px-3 py-3 shadow-md justify-between items-center">
      <FaArrowLeft
        className="text-xl me-3 font-thin cursor-pointer"
        onClick={() => router.navigate({ to: "/" })}
      />
      <SearchBar onChangeValue={setSearchValue} defaultValue={searchValue} />
    </nav>
  );
}
