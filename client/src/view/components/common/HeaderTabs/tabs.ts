import { ROUTER_PATHS } from '../../../../data/enums';

type Tabs = { id: number; title: string; path: ROUTER_PATHS };

export const tabs: Tabs[] = [
  { id: 1, title: 'Sign_Up', path: ROUTER_PATHS.SIGN_UP },
  { id: 2, title: 'Sign_In', path: ROUTER_PATHS.SIGN_IN },
];
