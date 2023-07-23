import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className=" max-h-screen w-full overflow-scroll">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-lg">
            <th>Product</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
