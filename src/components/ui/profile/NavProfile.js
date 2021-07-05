import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const CssNavAction = withStyles(theme => ({
  root: {
    height: '3rem',
    color: theme.palette.common.fontColor,
    borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
    '&:hover': {
      backgroundColor: theme.palette.common.hoverColor,
      color: theme.palette.common.blue
    },
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      height: '2.5rem'
    }
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    height: '3rem',
    paddingBottom: '1rem',
    paddingTop: '1rem',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      paddingBottom: '0.7rem',
      paddingTop: '0.7rem',
      height: '2.5rem'
    }
  },
  selected: {
    '& .MuiBottomNavigationAction-label': {
      borderBottom: `4px solid ${theme.palette.common.blue}`,
      fontSize: '1rem',
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
        borderBottom: `2px solid ${theme.palette.common.blue}`,
      }
    }
  }
}))(BottomNavigationAction);

const useStyles = makeStyles(theme => ({
  navigation: {
    backgroundColor: theme.palette.common.background
  }

}));

export default function NavProfile() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <Grid item className={ classes.navContainer }>
      <BottomNavigation
        value={ value }
        className={ classes.navigation }
        showLabels
        onChange={ onChangeHandler }

      >
        <CssNavAction
          label='Tweets'
          disableRipple
          style={ { flexGrow: 1 } }
        />
        <CssNavAction
          label='Tweets & replies'
          disableRipple
          style={ { flexGrow: 2 } }
        />
        <CssNavAction
          label='Media'
          disableRipple
          style={ { flexGrow: 1 } }
        />
        <CssNavAction
          label='Likes'
          disableRipple
          style={ { flexGrow: 1 } }
        />
      </BottomNavigation>
    </Grid>
  )
}