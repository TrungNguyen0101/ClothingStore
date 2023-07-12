import axios from 'axios';

import configConstance from '@/instance/config';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm mã xử lý token
instance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = JSON.parse(localStorage.getItem('account')); // Lấy token từ Local Storage hoặc biến toàn cục
      if (token) {
        const updatedConfig = {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `${token?.token}`,
          },
        };
        return updatedConfig;
      }
    }

    // Nếu không có token, bỏ qua việc thêm Authorization header
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

export async function AxiosPost(API, data) {
  const result = await instance.post(`${configConstance.HOST}${API}`, data);
  return result;
}
export async function AxiosGet(API) {
  const result = await instance.get(`${configConstance.HOST}${API}`);
  return result;
}
export async function AxiosDelete(API) {
  const result = await instance.delete(`${configConstance.HOST}${API}`);
  return result;
}
export async function AxiosPut(API, data) {
  const result = await instance.put(`${configConstance.HOST}${API}`, data);
  return result;
}

export function formatNumber(number) {
  const nf = new Intl.NumberFormat();
  const value = number?.toString().replace(/\$|,|\./g, '');

  return nf.format(value, 10);
}
