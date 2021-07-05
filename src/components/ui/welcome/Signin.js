import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import twitterLogo from '../../../assets/twitterLogo.svg';


const CssTextField = withStyles((theme) => ({
  root: {
    '& .MuiInputLabel-root': {
      color: theme.palette.common.fontGrayColor
    },
    '& label.Mui-focused': {
      color: theme.palette.primary.main
    },
    '& label.Mui-error': {
      color: theme.palette.error.dark
    },
    '& .MuiFormHelperText-root': {
      color: theme.palette.error.dark
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.common.fontGrayColor,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.common.fontGrayColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-error fieldset': {
        borderColor: theme.palette.error.dark
      },
    },
    '& .MuiSelect-icon': {
      color: theme.palette.common.fontGrayColor
    }
  },
}))(TextField);

const useStyles = makeStyles((theme) => ({
  headingDialogContainer: {
    marginBottom: '2em'
  },
  logoDialogItem: {
    width: '2em'
  },
  logoImg: {
    width: '100%',
  },
  titleSignupDialog: {
    marginBottom: '1.5em'
  },
  textFieldContainer: {
    marginBottom: '1.5em'
  },
  textField: {
    marginBottom: '1.5em'
  },
  dateCaption: {
    marginBottom: '1em'
  },
  textFieldDateContainer: {
    marginBottom: '1.5em'
  },
  menuItemSignup: {
    backgroundColor: 'rgb(59, 70, 77)',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.common.blue
    }
  },
  registerButtonContainer: {
    marginTop: '2em',
    marginBottom: '2em'
  },
  loginButtonContainer: {
    marginTop: '1em',
    marginBottom: '1em'
  },
  cssLabel: {
    color: 'organ'
  },
  forgetPassword: {
    cursor: 'pointer',
    marginBottom: '1em',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `red !important`,
    }
  },
  cssFocused: {},
  notchedOutline: {
    borderColor: 'green !important'
  },
}))

export default function Signin(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchedXS = useMediaQuery(theme.breakpoints.down('xs'));

  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const signinHandler = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      props.setAuth();
      history.push('/username')
    }, 2000)
  }

  return (
    <Dialog
      open={ props.openSignin }
      onClose={ () => props.setOpenSignin(false) }
      BackdropProps={ {
        style: {
          backgroundColor: theme.palette.common.backDrop
        }
      } }
      PaperProps={ {
        style: {
          borderRadius: matchedXS ? undefined : 20,
          minWidth: matchedXS ? undefined : 400,
          backgroundColor: theme.palette.common.background
        }
      } }
      fullScreen={ matchedXS }
    >
      <DialogContent>
        <Grid container direction='column'>
          <Grid item container
            justify='center'
            alignItems='center'
            className={ classes.headingDialogContainer }
          >
            { loading ? <CircularProgress size={ 40 } /> :
              <Grid item className={ classes.logoDialogItem }>
                <img
                  src={ twitterLogo }
                  alt='twitter logo'
                  className={ classes.logoImg }
                />
              </Grid> }
          </Grid>
          <Grid item
            className={ classes.titleSignupDialog }
          >
            <Typography variant='h5'>
              Log in to Twitter
            </Typography>
          </Grid>
          <Grid item container
            direction='column'
            className={ classes.textFieldContainer }
          >
            <CssTextField
              label='Email'
              id='email'
              variant='outlined'
              type='email'
              className={ classes.textField }
            />
            <CssTextField
              label='Password'
              id='password'
              variant='outlined'
              type='password'
              className={ classes.textField }
            />
          </Grid>
          <Grid item container
            justify='center'
            className={ classes.loginButtonContainer }
          >
            <Button
              variant='contained'
              color='primary'
              disableElevation
              className={ classes.button }
              style={ { color: 'white' } }
              onClick={ signinHandler }
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Typography variant='subtitle1' align='center' className={ classes.forgetPassword }>
              Forgot password?
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}