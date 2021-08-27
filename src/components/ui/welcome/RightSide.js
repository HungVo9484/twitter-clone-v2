import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ReactComponent as Logo } from '../../../assets/twitterLogo.svg';

const useStyles = makeStyles((theme) => ({
  rightContainer: {
    minWidth: 800,
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
      marginBottom: '3em',
      marginLeft: 0,
      minWidth: 0,
    },
  },
  logoItem: {
    width: '3em',
    marginBottom: '5em',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '3em',
    },
  },
  logoImg: {
    width: '100%',
    height: '100%',
    '& path': {
      fill: theme.palette.common.logoColor,
    },
  },
  button: {
    ...theme.typography.button,
    height: 49,
    width: 379,
    [theme.breakpoints.down('sm')]: {
      width: 253,
    },
    [theme.breakpoints.down('xs')]: {
      width: '18em',
    },
  },
}));

const RightSide = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchedSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchedXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      item
      container
      md
      justify={matchedSM ? 'center' : undefined}
      alignItems='center'
      className={classes.rightContainer}
    >
      
      <Grid
        item
        container
        alignItems={matchedXS ? 'center' : undefined}
        direction='column'
        style={{ width: 'fit-content' }}
      >
        <Grid item className={classes.logoItem}>
          <Logo className={classes.logoImg} />
        </Grid>
        <Grid item style={{ marginBottom: '2em' }}>
          <Typography
            variant={matchedXS ? 'h2' : 'h1'}
            align={matchedXS ? 'center' : undefined}
            style={{ marginBottom: '0.8em' }}
          >
            What's{matchedSM ? <br /> : null} happening?
          </Typography>
          <Typography
            variant={matchedXS ? 'h4' : 'h3'}
            align={matchedXS ? 'center' : undefined}
          >
            Join Twitter today.
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={
            matchedXS ? 'column' : matchedSM ? 'row' : 'column'
          }
        >
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              disableRipple
              disableElevation
              className={classes.button}
              style={{
                marginBottom: matchedXS
                  ? '1em'
                  : matchedSM
                  ? 0
                  : '1.5em',
                marginRight: matchedXS ? 0 : matchedSM ? '1em' : 0,
                color: 'white',
              }}
              onClick={props.onClickSignup}
            >
              Signup
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              className={classes.button}
              onClick={props.onClickSignin}
              disableRipple
            >
              Signin
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RightSide;
