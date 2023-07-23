import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

const AdminProducts = () => {
  return (
    <div className="flex">
      <Sidebar title="Admin Panel" />
      <ProductList />
    </div>
  );
};

export default AdminProducts;
