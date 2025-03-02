
import http from '@/lib/axios';
import { LoginUser,LogInResponse} from '@/lib/types/login';
import constants from '@/lib/constant/url-constants';

export const loginService = {
  // Login
  loginUser: async (userData: LoginUser) => {
    const response = await http.post<LogInResponse>(constants.LOGIN_URL, userData);
    return response.data;
  },
};
