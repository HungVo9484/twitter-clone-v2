import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import Welcome from './pages/Welcome';
import Main from './ui/Main';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Toggle } from './ui/common/Toggle';
import AuthContext from '../hooks/auth-context';
import { authActions } from '../store/auth_slice';
import EditProfile from './ui/profile/EditProfile/EditProfile';
import { loadUser } from '../store/auth_action';


// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

function App() {
  const {themeOption, setTheme} = useContext(AuthContext)
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const {showEditProfile} = useSelector(state => state.utils)
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authActions.login());
    }
  },[dispatch])

  const toggleDrawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  let routes;

  if (isAuth) {
    routes = (
      <Main
        openDrawer={openDrawer}
        toggleDrawerHandler={toggleDrawerHandler}
      >
        <Switch>
          <Route path='/home' exact>
            <Home toggleDrawerHandler={toggleDrawerHandler} />
          </Route>
          <Route path='/:username' exact>
            <Profile />
          </Route>
        </Switch>
      </Main>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <Welcome />
        </Route>
        {/* <Route path='/'>
          <Redirect to='/' />
        </Route> */}
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={themeOption}>
      <div
        style={{ backgroundColor: themeOption.palette.common.background }}
      >
        <Toggle isActive={ themeOption.id === 'dark' } onToggle={ setTheme } />
        {showEditProfile && <EditProfile />}
        {routes}
      </div>
    </ThemeProvider>
  );
}

export default App;
