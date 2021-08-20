import React, { useState, useContext } from 'react';
import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Register from '../ui/welcome/Register';
import Login from '../ui/welcome/Login';
import LeftSide from '../ui/welcome/LeftSide';
import RightSide from '../ui/welcome/RightSide';
import AuthContext from '../../hooks/auth-context';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.common.background,
    margin: 0,
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const { onRegister, onLogin } = useContext(AuthContext);
  const theme = useTheme();
  const matchedSM = useMediaQuery(
    theme.breakpoints.down('sm')
  );

  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);

  const signupHandler = () => {
    setOpenSignup(true);
  }

  const signinHandler = () => {
    setOpenSignin(true)
  }

  return (
    <Grid
      container
      direction={matchedSM ? 'column-reverse' : 'row'}
      alignItems={matchedSM ? 'center' : undefined}
      className={classes.mainContainer}
    >
      <LeftSide />
      <RightSide onClickSignup={signupHandler} onClickSignin={signinHandler} />
      {openSignup && <Register />}
      {openSignin && <Login />}
    </Grid>
  );
};

export default Welcome;
