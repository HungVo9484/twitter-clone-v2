import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import InputFloat from '../common/InputFloat';
import { ReactComponent as Logo } from '../../../assets/twitterLogo.svg';
import {
  emailReducer,
  passwordReducer,
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
  width: 25rem;
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
    width: 250,
    marginTop: '2rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    '&:disabled': {
      backgroundColor: theme.palette.primary.light,
      color: 'white',
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  const { onLogin } = useContext(AuthContext);
  const history = useHistory();

  const [formIsValid, setFormIsValid] = useState(false);

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailValid } = email;
  const { isValid: passwordValid } = password;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailValid && passwordValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid]);

  const emailChangeHandler = (_, value) => {
    dispatchEmail({ type: 'USER_INPUT', val: value });
  };

  const passwordChangedHandler = (_, value) => {
    dispatchPassword({ type: 'USER_INPUT', val: value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(email.value, password.value, history)
  };

  return (
    <BackDrop>
      <RegisterContainer>
        <div className='logo'>
          <TwitterLogo />
        </div>
        <div className='title'>Log in to Twitter</div>
        <form className='registerForm' onSubmit={submitHandler}>
          <InputFloat
            name='email'
            label='Email'
            id='email'
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
            label='Password'
            id='password'
            type='password'
            error={
              passwordValid !== false
                ? false
                : 'PLease enter password at least 7 characters!'
            }
            onChange={passwordChangedHandler}
            onBlur={validatePasswordHandler}
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
            Login
          </Button>
        </form>
      </RegisterContainer>
    </BackDrop>
  );
};

export default Login;
