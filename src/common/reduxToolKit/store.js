// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";
import slice from "./service/slices";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    auth: authSlice, // Add auth slice to the store
    app: slice, // Combine your app slice reducer here
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
