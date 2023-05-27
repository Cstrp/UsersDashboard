import { GridRowParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { Dispatch, SetStateAction } from 'react';
import { User } from '../../../../data';

export interface UsersTableToolbarProps {
  row: GridRowParams;
  selectedRows: GridRowSelectionModel;
  setUsers: Dispatch<SetStateAction<User[]>>;
}
