import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from '../../../../data/enums';
import { HeaderTabs } from '../HeaderTabs/HeaderTabs';

export const Header = () => {
  return (
    <Box>
      <AppBar color={'inherit'} elevation={12}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button color={'success'} variant={'outlined'} component={Link} to={ROUTER_PATHS.HOME}>
              Users dashboard
            </Button>
          </Box>

          <HeaderTabs />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
