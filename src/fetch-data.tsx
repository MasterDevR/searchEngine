import axios from "axios";

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
  products: any[]; // Temporarily use any[] to capture the complete response
  total: number;
  skip: number;
  limit: number;
}
interface reviewProps {
  rating: string;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
const fetchItemList = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<ProductApiResponse>(
      "https://dummyjson.com/products?limit=1"
    );

    // Transform the response to match the Product interface
    const products: Product[] = response.data.products.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.images,
      brand: item.brand,
      category: item.category,
      description: item.description,
      stock: item.stock,
      weight: item.weight,
      discountPercentage: item.discountPercentage,
      minimumOrderQuantity: item.minimumOrderQuantity,
      shippingInformation: item.shippingInformation,
      returnPolicy: item.returnPolicy,
      rating: item.rating,
      tags: item.tags,
      reviews: item.reviews.map((review: reviewProps) => ({
        rating: review.rating,
        comment: review.comment,
        date: review.date,
        reviewerName: review.reviewerName,
        reviewerEmail: review.reviewerEmail,
      })),
    }));

    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchItemList;
