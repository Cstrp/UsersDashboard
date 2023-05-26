import { Message, SignUpValues } from '../types';
import { API } from './api_interceptor';

export const sign_up = async (value: SignUpValues) => {
  try {
    const res = await API.post<Message>('/sign_up', value);

    return res.data || {};
  } catch (err) {
    console.error(err);
  }
};
