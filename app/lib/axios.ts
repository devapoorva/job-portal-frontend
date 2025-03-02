
import axios, { AxiosError, AxiosResponse } from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


http.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('_token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('_token');
        localStorage.removeItem('_user');
        // Optionally redirect to login
        window.location.href = '/login';
      }
    }
    
    if (status === 404) {
      console.error('Resource not found');
    }
    
    if (status === 500) {
      console.error('Server error occurred');
    }
    
    return Promise.reject(error);
  }
);

export default http;