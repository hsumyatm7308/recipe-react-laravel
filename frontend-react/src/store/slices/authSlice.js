import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: null,
  userData: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      (state.token = payload.token), (state.userData = payload.userData);
      Cookies.set("userData", JSON.stringify(state.userData));
      Cookies.set("token", state.token);
    },
    removeUser: (state) => {
      (state.token = null), (state.userData = null);
      Cookies.remove("token");
      Cookies.remove("userData");
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
