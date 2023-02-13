import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { selectName } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated } from 'redux/selectors';
import { logOutThunk } from 'redux/auth/operationsAuth';
import css from './Appbar.module.css';

const ButtonAppBar = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {isAuth && (
              <Button href={'phonebook'} color="inherit">
                Phonebook
              </Button>
            )}
          </Typography>

          {name ? (
            <>
              <img
                className={css.avatar}
                src="https://i.pravatar.cc/300"
                alt="avatar"
                width="30"
                height="30"
              />
              <p className={css.greeting}> Hello, {name}! </p>
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
