import React, { useState, useEffect } from 'react';
import lightTheme from '../components/Theme/lightTheme';
import darkTheme from '../components/Theme/darkTheme';

const AuthContext = React.createContext({
  isAuthenticated: false,
  isShowLogout: false,
  themeOption: lightTheme,
  onRegister: (name, email, password, birthday, history) => {},
  onLogin: (email, password, history) => {},
  onLogout: (history) => {},
  showLogout: () => { },
  setTheme: () => {}
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('auth', token);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const registerHandler = (
    name,
    email,
    password,
    birthday,
    history
  ) => {
    localStorage.setItem('token', '1');
    setIsLoggedIn(true);
    console.log(name, email, password, birthday);
    history.push('/home');
  };

  const loginHandler = (email, password, history) => {
    localStorage.setItem('token', '1');
    setIsLoggedIn(true);
    console.log(email, password);
    history.push('/home')
  };

  const logoutHandler = (history) => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    history.push('/');
  };

  const showLogoutHandler = () => {
    console.log('click showLogout', showLogout);
    setShowLogout(!showLogout)
  }

  const setThemeHandler = () => {
    setTheme(theme => theme.id === 'light' ? darkTheme : lightTheme)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isLoggedIn,
        isShowLogout: showLogout,
        themeOption: theme,
        onRegister: registerHandler,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        showLogout: showLogoutHandler,
        setTheme: setThemeHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
