import React, { useState, useEffect } from 'react';
import lightTheme from '../components/Theme/lightTheme';
import darkTheme from '../components/Theme/darkTheme';

const AuthContext = React.createContext({
  url: 'http://127.0.0.1:5000',
  isAuthenticated: false,
  isShowLogout: false,
  themeOption: lightTheme,
  onRegister: (name, email, password, birthday, history) => {},
  onLogin: (email, password, history) => {},
  onLogout: (history) => {},
  showLogout: () => {},
  setTheme: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const registerHandler = (token, history) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    history.push('/home');
  };

  const loginHandler = (email, password, history) => {
    localStorage.setItem('token', '1');
    setIsLoggedIn(true);
    console.log(email, password);
    history.push('/home');
  };

  const logoutHandler = (history) => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    history.push('/');
  };

  const showLogoutHandler = () => {
    console.log('click showLogout', showLogout);
    setShowLogout(!showLogout);
  };

  const setThemeHandler = () => {
    setTheme((theme) =>
      theme.id === 'light' ? darkTheme : lightTheme
    );
  };

  return (
    <AuthContext.Provider
      value={{
        url: 'http://127.0.0.1:5000',
        isAuthenticated: isLoggedIn,
        isShowLogout: showLogout,
        themeOption: theme,
        onRegister: registerHandler,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        showLogout: showLogoutHandler,
        setTheme: setThemeHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
