
import http from '@/lib/axios';
import constants from '@/lib/constant/url-constants';
import { RegisterUser } from '@/lib/types/register';
import { UserDetails } from '@/lib/types/user';


export const registerService = {
  // Register
  registerUser: async (userData: RegisterUser) => {
    const response = await http.post<UserDetails>(constants.REGISTER_URL, userData);
    return response.data;
  },

};
