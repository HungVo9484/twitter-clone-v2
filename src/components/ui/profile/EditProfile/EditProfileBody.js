import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Typography from '@material-ui/core/Typography';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import Avatar from '@material-ui/core/Avatar';

import InputFloat from '../../common/InputFloat';
import { ReactComponent as Logo } from '../../../assets/twitterLogo.svg';
import DatePicker from '../../common/DatePicker';
import {
  birthdayReducer,
  emailReducer,
  passwordReducer,
  usernameReducer,
} from '../../../../hooks/validatedReducer';
import { register } from '../../../../store/auth_action';
import BioInput from '../BioInput';

const BackDrop = withTheme(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(p) => p.theme.palette.common.backDrop};
  z-index: 2000;
  display: flex;
`);

const RegisterContainer = withTheme(styled.div`
  position: relative;
  margin: auto;
  width: 37.5rem;
  background: ${(p) => p.theme.palette.common.background};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-height: 650px;
  

  .contentContainer {
    overflow-y: scroll;
  }

  .editProfileBar {
    width: 95%;
    display: flex;
    position: sticky;
    z-index: 2002;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: ${(p) => p.theme.palette.common.background};
    padding: 1rem;
  }

  .closeContainer {
    display: flex;
  }

  .textAppBarProfile {
    margin-left: 1rem;
  }

  .imageCover {
    width: 100%;
    height: 12.5em;
    background: grey;
    display: flex;
  }
  .coverIcons {
    position: relative;
    margin: auto;
    cursor: pointer;
  }

  .registerForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  .birthday {
    width: 100%;
    margin-top: 2rem;
    ${(p) => p.theme.typography.h6}
  }
  .content {
    ${(p) => p.theme.typography.body1}
    margin-bottom: 1rem;
  }
  .input {
    margin-bottom: 2rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`);

const TwitterLogo = withTheme(styled(Logo)`
  width: 100%;
  height: 100%;
  & path {
    fill: ${(p) => p.theme.palette.common.logoColor};
  }
`);

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.button,
    color: 'white',
  },
  imageCover: {
    width: '100%',
    height: '12.5em',
    display: 'flex',
    background: 'grey',
    [theme.breakpoints.down('xs')]: {
      height: '9em',
    },
  },
  avatarProfile: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    marginTop: '-4.4em',
    marginLeft: '1rem',
    
    border: `0.3em solid ${theme.palette.common.background}`,
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginTop: '-2em',
      border: `0.1em solid ${theme.palette.common.background}`,
    },
  }
}));

const EditProfile = (props) => {
  const classes = useStyles();
  const { isLoading, error } = useSelector((state) => state.utils);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formIsValid, setFormIsValid] = useState(false);
  const [name, dispatchName] = useReducer(usernameReducer, {
    value: '',
    isValid: null,
  });
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });
  const [birthday, dispatchBirthday] = useReducer(birthdayReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: nameValid } = name;
  const { isValid: emailValid } = email;
  const { isValid: passwordValid } = password;
  const { isValid: birthdayValid } = birthday;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        nameValid && emailValid && passwordValid && birthdayValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [nameValid, emailValid, passwordValid, birthdayValid]);

  const nameChangeHandler = (_, value) => {
    dispatchName({ type: 'USER_INPUT', val: value });
  };

  const emailChangeHandler = (_, value) => {
    dispatchEmail({ type: 'USER_INPUT', val: value });
  };

  const passwordChangeHandler = (_, value) => {
    dispatchPassword({ type: 'USER_INPUT', val: value });
  };

  const birthdayChangeHandler = (date) => {
    dispatchBirthday({ type: 'USER_INPUT', date });
  };

  const validateNameHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      register(
        name.value,
        email.value,
        password.value,
        birthday.value,
        history
      )
    );
  };

  return (
    <BackDrop>
      <RegisterContainer>
        <div className='editProfileBar'>
          <div className='closeContainer'>
            <CloseOutlinedIcon />
            <Typography variant='h5' className='textAppBarProfile'>
              Edit Profile
            </Typography>
          </div>
          <Button
            variant='contained'
            color='primary'
            disableElevation
            disableRipple
            className={classes.button}
          >
            Save
          </Button>
        </div>
        <div className='contentContainer'>
          <div className={classes.imageCover}>
            <div
            className='coverIcons'>
            <PhotoCameraOutlinedIcon /><CloseOutlinedIcon />
            </div>
          </div>
          <Avatar className={classes.avatarProfile}><PhotoCameraOutlinedIcon /></Avatar>
          <form className='registerForm' onSubmit={ submitHandler }>
            <InputFloat
              name='name'
              id='name'
              label='Name'
              type='text'
              maxLength={50}
              // error={
              //   nameValid !== false
              //     ? false
              //     : 'PLease enter valid name without space!'
              // }
              onChange={nameChangeHandler}
              onBlur={validateNameHandler}
            />
            <BioInput
              name='bio'
              id='bio'
              label='Bio'
              type='textarea'
              maxLength={160}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
            <InputFloat
              name='location'
              id='location'
              label='Location'
              type='text'
              maxLength={30}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <InputFloat
              name='website'
              id='website'
              label='Website'
              type='text'
              maxLength={60}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <div className='birthday'>Date of birth</div>
            <div className='content'>
              This will not be shown publicly. Confirm your own age,
              even if this account is for a business, a pet, or
              something else.
            </div>
            <DatePicker
              name='birthday'
              onChange={birthdayChangeHandler}
            />
          </form>
        </div>
  
  );
};

export default EditProfile;
