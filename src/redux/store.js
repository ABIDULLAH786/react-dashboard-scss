import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    // Add additional middleware here
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
