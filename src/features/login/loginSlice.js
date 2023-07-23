import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const LoginSlice = createSlice({
  name: "userType",
  initialState,
  reducers: {
    userData: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    logout: () => {
      return "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { userData, logout } = LoginSlice.actions;

export default LoginSlice.reducer;
