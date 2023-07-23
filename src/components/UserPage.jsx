import React from "react";
import Sidebar from "./Sidebar";

const UserPage = () => {
  return (
    <div className="flex">
      <Sidebar title="User Panel" />
      <div
        className="h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?size=626&ext=jpg')",
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Welcome to User Panel</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dignissim nulla. Sed sed euismod metus, vel euismod velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
