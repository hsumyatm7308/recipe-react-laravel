import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./services/apiService";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    authSlice: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
