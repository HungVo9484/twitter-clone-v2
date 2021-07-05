import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

import Welcome from './pages/Welcome';
import Main from './ui/Main';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  const theme = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const authHandler = () => {
    setIsAuthenticated(!isAuthenticated);
  }

  const toggleDrawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  let routes;

  if (isAuthenticated) {
    routes = (
      <Main
        openDrawer={ openDrawer }
        toggleDrawerHandler={ toggleDrawerHandler }
      >
        <Switch>
          <Route path='/home' exact>
            <Home toggleDrawerHandler={ toggleDrawerHandler } />
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
          <Welcome setAuth={ authHandler } />
        </Route>
        <Route path='/'>
          <Redirect to='/' />
        </Route>
      </Switch>

    );
  }

  return (
    <div style={ { backgroundColor: theme.palette.common.background } }>
      { routes }
    </div>
  );
}

export default App;
