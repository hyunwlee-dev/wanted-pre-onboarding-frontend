import { axiosInstance } from '../utils';

const signUp = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/signup', payload);
    return response;
  } catch(error) {
    return error;
  }
}

const signIn = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/signin', payload);
    return response;
  } catch(error) {
    return error;
  }
}

export { signUp, signIn };
