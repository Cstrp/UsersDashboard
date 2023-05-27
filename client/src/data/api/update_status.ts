import { STATUS } from '../enums';
import { Dispatch, SetStateAction } from 'react';
import { API } from './api_interceptor';
import { Message } from '../types';

export const update_status = async ({
  updated,
  setMessage,
}: {
  updated: { status: STATUS; ids: number[] };
  setMessage?: Dispatch<SetStateAction<string>>;
}) => {
  try {
    const res = await API.put<Message>('/users/update', updated);

    if (res) setMessage!(res.data.message);
  } catch (error: any) {
    setMessage!(error.message);
  }
};
