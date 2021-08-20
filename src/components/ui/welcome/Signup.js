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
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ReactComponent as Logo } from '../../../assets/twitterLogo.svg';


const CssTextField = withStyles((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      color: theme.palette.common.fontColor,
      fontSize: '1.2rem',
      fontWeight: 600
    },
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
        borderColor: theme.palette.common.borderTextField,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.common.borderTextField,
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
    height: '100%',
    '& path': {
      fill: theme.palette.common.logoColor,
    },
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
  button: {
    ...theme.typography.button,
    height: 49,
    width: 379,
    color: 'white'
  }
}));

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const years = [1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995];

export default function Signup(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchedXS = useMediaQuery(theme.breakpoints.down('xs'));

  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const [dateValue, setDateValue] = useState({
    month: '',
    date: '',
    year: '',
  });

  const onChangeMonthHandler = (e) => {
    setDateValue({ ...dateValue, month: e.target.value })
  };

  const onChangeDateHandler = (e) => {
    setDateValue({ ...dateValue, date: e.target.value })
  };

  const onChangeYearHandler = (e) => {
    setDateValue({ ...dateValue, year: e.target.value })
  };

  const signupHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setAuth();
      history.push('/home');
    }, 2000)
  };

  return (
    <Dialog
      open={ props.openSignup }
      onClose={ () => props.setOpenSignup(false) }
      BackdropProps={ {
        style: {
          backgroundColor: theme.palette.common.backDrop
        }
      } }
      PaperProps={ {
        style: {
          borderRadius: matchedXS ? undefined : 20,
          minWidth: matchedXS ? undefined : 600,
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
                <Logo className={ classes.logoImg } />
              </Grid> }
          </Grid>
          <Grid item
            className={ classes.titleSignupDialog }
          >
            <Typography variant='h4'>
              Create your account
            </Typography>
          </Grid>
          <Grid item container
            direction='column'
            className={ classes.textFieldContainer }
          >
            <CssTextField
              label='Name'
              id='name'
              variant='outlined'
              className={ classes.textField }
              // error
              // helperText={ true ? 'Please Enter the Name' : undefined }
            />
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
          <Grid item className={ classes.dateCaption }>
            <Typography variant='h6'>
              Date of birth
            </Typography>
            <Typography variant='body1'>
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </Typography>
          </Grid>
          <Grid item container
            justify='space-between'
            className={ classes.textFieldDateContainer }
          >
            <Grid item
              style={ {
                width: matchedXS ? 'auto' : '16em',
                flexGrow: matchedXS ? 2 : undefined,
                marginRight: matchedXS ? theme.spacing(1) : undefined
              } }
            >
              <CssTextField
                label='Month'
                select
                fullWidth
                id='month'
                variant='outlined'
                value={ dateValue.month }
                onChange={ onChangeMonthHandler }
                SelectProps={ {
                  MenuProps: {
                    PaperProps: {
                      style: {
                        backgroundColor: 'rgb(59, 70, 77)',
                        maxHeight: '15em'
                      }
                    }
                  }
                } }

              >
                { months.map((month) => (
                  <MenuItem
                    key={ month }
                    value={ month }
                    className={ classes.menuItemSignup }
                  >
                    { month }
                  </MenuItem>
                )) }
              </CssTextField>
            </Grid>
            <Grid item
              style={ {
                width: matchedXS ? 'auto' : '8em',
                flexGrow: matchedXS ? 1 : undefined,
                marginRight: matchedXS ? theme.spacing(1) : undefined
              } }
            >
              <CssTextField
                label='Date'
                select
                fullWidth
                id='date'
                variant='outlined'
                value={ dateValue.date }
                onChange={ onChangeDateHandler }
                SelectProps={ {
                  MenuProps: {
                    PaperProps: {
                      style: {
                        backgroundColor: 'rgb(59, 70, 77)',
                        maxHeight: '15em'
                      }
                    }
                  }
                } }
              >
                { dates.map((date) => (
                  <MenuItem
                    key={ date }
                    value={ dates }
                    className={ classes.menuItemSignup }
                  >
                    { date }
                  </MenuItem>
                )) }
              </CssTextField>
            </Grid>
            <Grid item
              style={ {
                width: matchedXS ? 'auto' : '9.5em',
                flexGrow: matchedXS ? 1 : undefined,
                // marginRight: matchedXS ? theme.spacing(0.5) : undefined
              } }
            >
              <CssTextField
                label='Year'
                select
                fullWidth
                id='year'
                variant='outlined'
                value={ dateValue.year }
                onChange={ onChangeYearHandler }
                SelectProps={ {
                  MenuProps: {
                    PaperProps: {
                      style: {
                        backgroundColor: 'rgb(59, 70, 77)',
                        maxHeight: '15em'
                      }
                    }
                  },
                } }
              >
                { years.map((year) => (
                  <MenuItem
                    key={ year }
                    value={ year }
                    className={ classes.menuItemSignup }
                  >
                    { year }
                  </MenuItem>
                )) }
              </CssTextField>
            </Grid>
          </Grid>
          <Grid item container
            justify='center'
            className={ classes.registerButtonContainer }
          >
            <Button
              variant='contained'
              color='primary'
              disableElevation
              disableRipple
              className={ classes.button }
              onClick={ signupHandler }
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}