import React from "react";
import Sidebar from "./Sidebar";

const AdminPage = () => {
  return (
    <div className="flex">
      <Sidebar title="Admin Panel" />
      <div
        className="h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20211118/pngtree-blue-round-technology-dashboard-image_908916.jpg')",
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Welcome to Admin Panel</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dignissim nulla. Sed sed euismod metus, vel euismod velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
