import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logOutAction } from 'redux/auth/sliceAuth';
import { selectName } from 'redux/selectors';
import { useSelector, useDispatch} from 'react-redux';
import { selectIsAuthenticated } from 'redux/selectors';


const ButtonAppBar = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);
  
  const handleLogOut = () => {
    dispatch(logOutAction());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {isAuth.length > 0 && <Button href={'phonebook'} color="inherit">
              Phonebook
            </Button>}
          </Typography>

          {name.length > 0 ? (
            <>
              <p> Hello, {name}! </p>
              <Button onClick={handleLogOut} color="inherit">
                Log Out
              </Button>
            </>
          ) : (
            <>
              {' '}
              <Button href={'login'} color="inherit">
                Login
              </Button>
              <Button href={'registration'} color="inherit">
                Register
              </Button>{' '}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
