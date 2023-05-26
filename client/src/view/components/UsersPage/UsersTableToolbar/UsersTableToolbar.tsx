import { Box, IconButton } from '@mui/material';
import { Delete, Lock, LockOpen } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { UsersTableToolbarProps } from './UsersTableToolbarProps';
import { clear, currentStatus, deleteUser, getItem, ROUTER_PATHS, STATUS, updateStatus, userId } from '../../../../data';
import { useNavigate } from 'react-router-dom';

export const UsersTableToolbar = ({ data, selectedUsers, setUsers, selectedUsersCount }: UsersTableToolbarProps) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<STATUS>(currentStatus);

  useEffect(() => {
    if (userId && data && data.id === userId && data.row.status !== status) {
      navigate(ROUTER_PATHS.DEFAULT);
      clear();
    }
  }, [data, status]);

  const handleStatusChange = (status: STATUS) => {
    updateStatus({ status, ids: selectedUsersCount as number[] });

    setUsers((prevState) =>
      prevState.map((user) => (selectedUsersCount.includes(user?.id!) ? { ...user, status } : user)),
    );
    setStatus(status);
  };

  const handleDeleteUser = () => {
    if (selectedUsersCount.includes(getItem('id')!)) {
      navigate(ROUTER_PATHS.DEFAULT);
      clear();
    }

    deleteUser({ ids: selectedUsersCount as number[] });
    setUsers((prevState) => prevState.filter((user) => !selectedUsersCount.includes(user.id!)));
  };

  return (
    <Box className={'flex flex-row gap-10 mx-1 my-2'}>
      <IconButton onClick={() => handleStatusChange(STATUS.DEACTIVATED)}>
        <Lock />
      </IconButton>
      <IconButton onClick={() => handleStatusChange(STATUS.ACTIVE)}>
        <LockOpen />
      </IconButton>
      <IconButton onClick={handleDeleteUser}>
        <Delete />
      </IconButton>
    </Box>
  );
};
