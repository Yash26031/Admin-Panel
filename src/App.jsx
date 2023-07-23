// App.js

import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import Profile from "./components/Profile";
import AdminProducts from "./components/AdminProducts";
import UserProducts from "./components/UserProducts";

const App = () => {
  const user = useSelector((state) => state.loginUser);

  // Custom route resolver function
  const routeResolver = (role, element) => {
    if (!user.user) {
      return <Navigate to="/login" />;
    }

    if (!role.includes(user.user.role)) {
      return <Navigate to="/" />;
    }

    return element;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {user.user && user.user.role === "admin" ? (
          <>
            <Route
              path="/admin"
              element={routeResolver(["admin"], <AdminPage />)}
            />
            <Route
              path="/profile"
              element={routeResolver(["admin"], <Profile />)}
            />
            <Route
              path="/products"
              element={routeResolver(["admin"], <AdminProducts />)}
            />
          </>
        ) : (
          <>
            <Route
              path="/user"
              element={routeResolver(["user"], <UserPage />)}
            />
            <Route
              path="/profile"
              element={routeResolver(["user"], <Profile />)}
            />
            <Route
              path="/products"
              element={routeResolver(["user"], <UserProducts />)}
            />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const NotFound = () => <h1>Page Not Found</h1>;

export default App;
