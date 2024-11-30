import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

export const useAuthStore = create((set) => ({
  user: null, 
  isSignUp: false, 
  logout: () => set({ user: null }), 

  // Signup function
  signup: async (credentials) => {
    set({ isSignUp: true });
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/signup`,
        credentials
      );
      Cookies.set("token", data.user.token); 
      set({ user: data.user, isSignUp: false });
    } catch (error) {
      console.error("Signup error: ", error.response?.data?.message || error.message);
      set({ user: null, isSignUp: false });
    }
  },

  // Login function
  login: async (credentials) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`,
        credentials
      );
      Cookies.set("token", data.user.token); // Save token
      set({ user: data.user }); 
      return { success: true }; 
    } catch (error) {
      console.error("Login error: ", error.response?.data?.message || error.message);
      return {
        success: false,
        message: error.response?.data?.message || "Invalid credentials",
      }; 
    }
  },

  // Authentication check
  authCheck: async () => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No token found");

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/authCheck`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true, 
        }
      );
      set({ user: data.user });
    } catch (error) {
      console.error("Auth check error: ", error.response?.data?.message || error.message);
      set({ user: null }); 
    }
  },

  // // Logout function
  // logout: () => {
  //   Cookies.remove("token"); 
  //   set({ user: null }); 
  // },
}));
