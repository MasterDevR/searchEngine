import FetchAllProducts from "@/src/components/display/products/all-products/fetch-all-products";
import axios from "axios";
export default async function Page({
  params,
}: {
  params: { category: string; id: string };
}) {
  const product = await getDataByCategories(params.category);

  return (
    <div className="flex flex-col gap-y-32 p-12">
      <div className="flex flex-wrap p-5 gap-6 justify-center">
        {product.map((prod: any) => (
          <div
            className={`card card-compact w-96 bg-base-100 shadow-xl ${
              prod.id === +params.id && "bg-gray-300"
            }`}
            key={prod.title}
          >
            <figure>
              <img
                src={prod.images[0]}
                alt={prod.title}
                width={200}
                height={200}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{prod.title}</h2>
              <p>{prod.descriptionS}</p>
              <div className="card-actions flex justify-between items-center ">
                <span className="font-bold">
                  <span className="text-xl text-red-600">Price:</span>{" "}
                  {prod.price}
                </span>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="divider divider-neutral">End</div>
      <div>
        <h1 className="text-5xl text-red-700 font-bold text-center">
          Try our latest Products
        </h1>
        <FetchAllProducts />
      </div>
    </div>
  );
}

const getDataByCategories = async (category: string) => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );

  return response.data.products;
};
