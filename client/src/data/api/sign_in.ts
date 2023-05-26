import { API } from './api_interceptor';
import { SignInData, SignInValues } from '../types';

export const sign_in = async (value: SignInValues) => {
  try {
    const res = await API.post<SignInData>('/sign_in', value);

    return res.data || {};
  } catch (err) {
    console.error(err);
  }
};
