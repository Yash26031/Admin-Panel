import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productSlice";
import loginReducer from "../features/login/loginSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    loginUser: loginReducer,
  },
});
