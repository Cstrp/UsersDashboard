import { Alert, Box, IconButton, Snackbar } from '@mui/material';
import { Delete, Lock, LockOpen } from '@mui/icons-material';
import { UsersTableToolbarProps } from './usersTableToolbarProps';
import { clearStorage, delete_user, getItem, ROUTER_PATHS, STATUS, update_status } from '../../../../data';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UsersTableToolbar = ({ row, selectedRows, setUsers }: UsersTableToolbarProps) => {
  const data = getItem('data');
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(data.status);

  const handleStatusChange = (status: STATUS) => {
    const updated = { status, ids: selectedRows as number[] };
    update_status({ updated, setMessage });
    setUsers((prevState) =>
      prevState.map((user) => (selectedRows.includes(user?.id!) ? { ...user, status: updated.status } : user)),
    );
    setOpen(true);

    if (row && data.id === row.id!) {
      setStatus(status);
    }
  };

  const handleDelete = () => {
    delete_user({ ids: selectedRows as number[] }, setMessage);
    setUsers((prevState) => prevState.filter((user) => !selectedRows.includes(user.id!)));
    setOpen(true);

    const data = getItem('data');

    if (selectedRows.includes(data.id)) {
      navigate(ROUTER_PATHS.HOME);
    }
  };

  useEffect(() => {
    if (selectedRows.includes(data.id) && row.row.status !== status) {
      navigate(ROUTER_PATHS.HOME);
    }

    if (data.id && row && row.id === data.id && row.row.status !== status) {
      navigate(ROUTER_PATHS.HOME);
      clearStorage();
    }
  }, [data, status]);

  return (
    <Box className={'py-5 flex flex-row gap-5'}>
      <IconButton onClick={() => handleStatusChange(STATUS.DEACTIVATED)}>
        <Lock />
      </IconButton>
      <IconButton onClick={() => handleStatusChange(STATUS.ACTIVE)}>
        <LockOpen />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <Delete />
      </IconButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(!open)}>
        <Alert variant={'filled'} elevation={10} severity={'info'} onClose={() => setOpen(!open)}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
