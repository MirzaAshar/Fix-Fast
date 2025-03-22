import { axiosService } from "./helper";

export const RegisterUser = async (userData) => {
  try {
    const response = await axiosService.post("/register", userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      throw new Error("Network error. Please try again later.");
    }
  }
};

export const LoginUser = async (userData) => {
  try {
    const response = await axiosService.post("/login", userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed");
    } else {
      throw new Error("Network error. Please try again later.");
    }
  }
};
