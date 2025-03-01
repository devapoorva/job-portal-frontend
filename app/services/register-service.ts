
import http from '@/lib/axios';
import { RegisterUser } from '@/lib/types/register';


export const registerService = {
  // Register
  createUser: async (userData: RegisterUser) => {
    const response = await http.post<User>('/users', userData);
    return response.data;
  },

};
