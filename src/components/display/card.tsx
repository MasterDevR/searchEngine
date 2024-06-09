"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
interface Product {
  id: number;
  title: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  stock: number;
  weight: number;
  discountPercentage: number;
  minimumOrderQuantity: number;
  shippingInformation: string;
  returnPolicy: string;
  rating: number;
  tags: string[];
  reviews: Review[];
}

interface ProductApiResponse {
  product: Product;
}

const Card: React.FC<ProductApiResponse> = ({ product }) => {
  return (
    <div className="  ">
      <div className="image_card ">
        <Image
          src={product.image[0]}
          alt="Picture of the author"
          fill
          sizes="(max-width: 780px) 100vw, 100vw"
          className=" bg-red-200 "
        />
      </div>

      <h1>{product.title}</h1>
      <h2>{product.brand}</h2>
      <h2>{product.category}</h2>
      <h2>{product.description}</h2>
      <h2>{product.stock}</h2>
      <h2>{product.weight}</h2>
      <h2>{product.discountPercentage}</h2>
      <h2>{product.minimumOrderQuantity}</h2>
      <h2>{product.shippingInformation}</h2>
      <h2>{product.returnPolicy}</h2>
      <h2>{product.rating}</h2>
      <h2>{product.tags}</h2>
      <div>
        {/* Display each review's rating */}
        {product.reviews.map((review, index) => (
          <div key={index}>
            <IoStar className="text-yellow-500" />
            <span>{review.rating}</span>
            <span>{review.comment}</span>
            <span>{review.date}</span>
            <span>{review.reviewerName}</span>
          </div>
        ))}
      </div>
    </div>
    // <></>
  );
};

export default Card;

// bossEm02703
