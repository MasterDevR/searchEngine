import axios from "axios";
import React from "react";
import Marquee from "react-fast-marquee";
const MensShoes = async () => {
  const products = await getData();
  return (
    <div className="bg-neutral-100 p-4">
      <h1 className="text-emerald-600 text-center pt-10 pb-4 text-3xl font-bold ">
        Experience the Ultimate Footwear Journey: Where Comfort Meets Style!{" "}
      </h1>
      <Marquee>
        <div className="flex flex-cols justify-center gap-x-10 ">
          {products.map((product: any) => {
            return (
              <div key={product.title} className="text-center ">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  width={350}
                  height={350}
                />
                <h1 className="font-bold tracking-wider text-xl">
                  {product.title}
                </h1>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default MensShoes;

async function getData() {
  const res = await axios("https://dummyjson.com/products/category/mens-shoes");

  return res.data.products;
}
