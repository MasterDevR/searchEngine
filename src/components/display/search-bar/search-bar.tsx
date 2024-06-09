"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const SearchBar = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [searchData, setSearchData] = useState<any>(null);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value) {
      timeoutRef.current = setTimeout(() => {
        axios
          .get(`https://dummyjson.com/products/search?q=${value}`)
          .then((res) => {
            setSearchData(res.data.products);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setSearchData([]);
          });
      }, 333);
    } else {
      setSearchData(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        onChange={searchHandler}
      />

      {searchData !== null && (
        <div className="absolute top-16 right-20 rounded-lg  bg-gray-100 p-6 max-h-72 overflow-auto ">
          {searchData.length === 0 ? (
            <h1>No Items Found.</h1>
          ) : (
            <div className="flex flex-col gap-y-4 font-bold">
              {searchData.map((item: any) => (
                <Link
                  href={{
                    pathname: `/products/${item.category}/${item.id}`,
                  }}
                  key={item.id}
                  className="hover:bg-white p-2 cursor-pointer flex items-center"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    height={50}
                    width={50}
                  />
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
