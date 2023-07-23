// src/Sidebar.js
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../features/login/loginSlice";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(""));
    navigate("/login");
  };

  return (
    <div className="bg-gray-800 text-white w-64 h-screen">
      <h1 className="text-2xl font-bold text-center p-3 mb-2">Welcome</h1>
      <ul>
        <li
          className={`mb-2 p-4 ${
            location.pathname === "/profile" ? "bg-white" : ""
          }`}
        >
          <Link
            to="/profile"
            className="text-blue-500 font-semibold text-xl flex hover:text-blue-800  transition"
          >
            Profile
          </Link>
        </li>
        <li
          className={`mb-2 p-4 ${
            location.pathname === "/products" ? "bg-white" : ""
          }`}
        >
          <Link
            to="/products"
            className="text-blue-500 font-semibold text-xl flex hover:text-blue-800 transition"
          >
            Products
          </Link>
        </li>
        <li
          className={`mb-2 p-4 text-red-400 font-semibold text-xl cursor-pointer flex hover:text-red-800 transition`}
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
