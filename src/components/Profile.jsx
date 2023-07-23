import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Profile = () => {
  const user = useSelector((state) => state.loginUser);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex items-center w-full mt-4 justify-center">
        <div className="max-w-sm h-full rounded overflow-hiddenshadow-lg">
          <img
            className="w-full"
            src={user.user.img}
            alt={user.user.username}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl uppercase mb-2">
              {user.user.username}
            </div>
            <p className="text-gray-700 text-base">{user.user.des}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
