import axios from "axios";

const FetchAllProducts = async () => {
  const allProducts = await fetchProducts();

  return (
    <div className="flex flex-wrap p-5 gap-6 justify-center">
      {allProducts.map((prod: any) => (
        <div
          className="card card-compact w-96 bg-base-100 shadow-xl"
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
            <p>{prod.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchAllProducts;

const fetchProducts = async () => {
  const categories = ["laptops", "mens-shoes", "mens-shirts", "mens-watches"];
  const requests = categories.map((category) =>
    axios.get(`https://dummyjson.com/products/category/${category}`)
  );

  const responses = await Promise.all(requests);
  const products: any[] = [];
  responses.forEach((response) => {
    products.push(...response.data.products);
  });

  return products;
};
