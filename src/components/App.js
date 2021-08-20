import React, { useState, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

import Welcome from './pages/Welcome';
import Main from './ui/Main';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AuthContext from '../hooks/auth-context';
import { Toggle } from './ui/common/Toggle';


function App() {
  const theme = useTheme();
  const { isAuthenticated, themeOption, setTheme } = useContext(AuthContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  let routes;

  if (isAuthenticated) {
    routes = (
      <Main
        openDrawer={openDrawer}
        toggleDrawerHandler={toggleDrawerHandler}
      >
        <Switch>
          <Route path='/home' exact>
            <Home toggleDrawerHandler={toggleDrawerHandler} />
          </Route>
          <Route path='/username' exact>
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
        <Route path='/'>
          <Redirect to='/' />
        </Route>
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={themeOption}>
      <div
        style={{ backgroundColor: themeOption.palette.common.background }}
      >
        <Toggle isActive={themeOption.id === 'dark'} onToggle={setTheme} />
        {routes}
      </div>
    </ThemeProvider>
  );
}

export default App;
