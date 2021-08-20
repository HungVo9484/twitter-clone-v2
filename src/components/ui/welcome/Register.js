import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import InputFloat from '../common/InputFloat';
import { ReactComponent as Logo } from '../../../assets/twitterLogo.svg';
import DatePicker from '../common/DatePicker';
import {
  birthdayReducer,
  emailReducer,
  passwordReducer,
  usernameReducer,
} from '../../../hooks/validatedReducer';
import AuthContext from '../../../hooks/auth-context';

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
  padding: 1rem 2rem;
  .logo {
    width: 3rem;
    margin-bottom: 2rem;
  }
  .title {
    ${(p) => p.theme.typography.h4}
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .registerForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 49,
    width: 379,
    marginTop: '2rem',
    marginBottom: '1rem',
    '&:disabled': {
      backgroundColor: theme.palette.primary.light,
      color: 'white',
    },
  },
}));

const Register = () => {
  const classes = useStyles();

  const { onRegister } = useContext(AuthContext);
  const history = useHistory()

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
    console.log('birthday', date);
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
    console.log('onSubmit', name, email, password, birthday);
    onRegister(name.value, email.value, password.value, birthday.value, history)
  }

  return (
    <BackDrop>
      <RegisterContainer>
        <div className='logo'>
          <TwitterLogo />
        </div>
        <div className='title'>Create your account</div>
        <form className='registerForm' onSubmit={submitHandler}>
          <InputFloat
            name='name'
            id='name'
            label='Name'
            type='text'
            maxLength={50}
            error={
              nameValid !== false
                ? false
                : 'PLease enter valid name without space!'
            }
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
          <InputFloat
            name='email'
            id='email'
            label='Email'
            type='email'
            error={
              emailValid !== false
                ? false
                : 'PLease enter valid email!'
            }
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <InputFloat
            name='password'
            id='password'
            label='Password'
            type='password'
            error={
              passwordValid !== false
                ? false
                : 'PLease enter password at least 7 characters!'
            }
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
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disableElevation
            disableRipple
            disabled={!formIsValid}
            className={classes.button}
          >
            Register
          </Button>
        </form>
      </RegisterContainer>
    </BackDrop>
  );
};

export default Register;
