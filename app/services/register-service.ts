
import http from '@/lib/axios';
import constants from '@/lib/constant/url-constants';
import { RegisterUser,RegisterResponse } from '@/lib/types/register';



export const registerService = {
  // Register
  registerUser: async (userData: RegisterUser) => {
    const response = await http.post<RegisterResponse>(constants.REGISTER_URL, userData);
    return response.data;
  },

};
