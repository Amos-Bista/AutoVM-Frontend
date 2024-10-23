// src/api/authAPI.js
import axios from "axios";

export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
    {
      email,
      password,
    }
  );
  return response.data; // Ensure this returns an object that contains a token
};
