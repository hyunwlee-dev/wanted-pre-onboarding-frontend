import axios from "axios";
const DEV_ENDPOINT = 'http://localhost:8000';
const PROD_ENDPOINT = 'https://www.pre-onboarding-selection-task.shop';
const axiosInstance = axios.create({
  baseURL: DEV_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  },
});

export { DEV_ENDPOINT, PROD_ENDPOINT, axiosInstance };
export { validator } from './validator';
