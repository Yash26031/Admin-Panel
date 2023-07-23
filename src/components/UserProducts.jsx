import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const UserProducts = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="flex">
      <Sidebar title="User Panel" />

      <div className="flex gap-2 max-h-screen w-full overflow-scroll m-4 flex-wrap">
        {products?.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-80 h-80 bg-gray-200 rounded shadow-lg"
            >
              <div className="flex justify-center items-center p-4">
                <img
                  className="w-36 h-36 object-cover"
                  src={item.imgdata}
                  alt={item.rname}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl uppercase mb-2">
                  {item.rname}
                </div>
                <p className="text-gray-700 text-base">{item.address}</p>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Rs. {item.price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{item.rating}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProducts;
