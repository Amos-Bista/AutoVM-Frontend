// src/store/authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        { email, password }
      );
      const token = response.data.token; // Adjust based on your backend response structure
      localStorage.setItem("token", token); // Save the token in localStorage
      navigate("/adminhome");

      return { token, email }; // Return the token and any other required data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state for auth
const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Handling the different states for loginUser async thunk
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
// export const { setLoading } = authSlice.actions;

// Export actions
export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

// Export the reducer to be included in the store
export default authSlice.reducer;
