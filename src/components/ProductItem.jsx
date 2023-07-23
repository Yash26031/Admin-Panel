import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateProduct,
  deleteProduct,
} from "../features/products/productSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.rname);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.address);

  const handleEdit = () => {
    setIsEditing(true);
  };

  console.log(product);

  const handleSave = () => {
    dispatch(updateProduct({ ...product, name, price, description }));
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <tr className="my-2 text-center">
      {isEditing ? (
        <>
          <td>
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={product.imgdata}
              alt={product.rname}
            />
          </td>
          <td className="text-lg font-bold">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" border-4 rounded-md p-2"
            />
          </td>
          <td>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=" border-4 rounded-md p-2"
            />
          </td>
          <td>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className=" border-4 rounded-md p-2"
            />
          </td>
          <td>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2"
            >
              Save
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="flex items-center justify-center">
            <img
              className="w-16 h-16  object-cover"
              src={product.imgdata}
              alt={product.rname}
            />
          </td>
          <td className="text-md font-semibold">{product.rname}</td>
          <td>{product.address}</td>
          <td>Rs. {product.price}</td>
          <td>
            <button
              onClick={handleEdit}
              className="bg-blue-500 rounded-md border-blue-900 border-2 text-white px-4 py-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 ml-2 rounded-md border-red-900 border-2 text-white px-4 py-2"
            >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ProductItem;
