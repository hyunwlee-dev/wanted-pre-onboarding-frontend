import axios from "axios";
const DEV_ENDPOINT = 'http://localhost:8000';
const PROD_ENDPOINT = 'https://www.pre-onboarding-selection-task.shop';
const axiosInstance = axios.create({
  baseURL: PROD_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  },
});

export const getToken = () => {
  try {
    const item = localStorage.getItem('access_token');
    return JSON.parse(item);
  } catch(error) {
    console.log(error);
  }
};

const axiosAuthInstance = axios.create({
  baseURL: PROD_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`,
  },
});

export { DEV_ENDPOINT, PROD_ENDPOINT, axiosInstance, axiosAuthInstance };
export { validator } from './validator';
