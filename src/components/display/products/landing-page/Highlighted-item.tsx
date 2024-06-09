import axios from "axios";
import React from "react";

const Highlights = async () => {
  const product = await getData();

  return (
    <div>
      <div className="flex items-center justify-start p-5">
        <div key={product.id} className="">
          <img
            src={product.images[0]}
            alt={product.title}
            width={750}
            height={750}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <main className="flex flex-col w-3/6 gap-y-12 justify-center h-screen">
          <h1 className="text-center text-4xl font-bold">
            Shop with Ease, Style with Confidence
          </h1>
          <p className="text-center text-xl">
            At ShopEase, we bring you an exquisite selection of luxury watches,
            meticulously curated to elevate your style and meet your discerning
            tastes. Whether you're looking for timeless elegance or modern
            sophistication, our collection has something for every watch
            enthusiast.
          </p>
          <div className="flex justify-around">
            <button className="btn btn-success tracking-widest font-bold text-white w-4/12">
              Shop Now
            </button>
            <button className="btn btn-outline btn-secondary tracking-widest font-bold text-white w-4/12">
              View Products
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Highlights;

async function getData() {
  const res = await axios("https://dummyjson.com/products/93");

  const jsonData = res.data;
  return jsonData;
}
