import { getItem } from './localStorage';

const userId = getItem('id');
const currentStatus = getItem('status');
const token = getItem('token');

export {token, currentStatus, userId}
