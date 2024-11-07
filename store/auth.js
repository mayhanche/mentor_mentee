
import { create } from "zustand";
import axios from 'axios';
export const useAuthStore = create((set)=> ({
    user : null,
    isSignUp : false,
    signup : async (credentials) => {
        set({ isSignUp : true });
        try {
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/signup`, credentials)
            set({user : data.user, isSignUp : false})
        } catch (error) {
            console.log(error);
            set({user: null, isSignUp: false})
        }
    }
}))