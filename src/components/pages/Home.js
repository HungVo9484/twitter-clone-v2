import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme,  } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import HomeAppBar from "../ui/home/AppBarHome";
import TweetBox from "../ui/home/TweetBox";
import Posts from "../ui/Posts/Post";
import TopAppBarMobile from "../ui/AppBarMobileTop";
import AppBarMobileBottom from "../ui/AppBarMobileBottom";
import { loadUser } from '../../store/auth_action';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    flexGrow: 2,
    maxWidth: 600,
    borderRight: `1px solid ${theme.palette.common.homeBorder}`,
    borderLeft: `1px solid ${theme.palette.common.homeBorder}`,
    [theme.breakpoints.down("xs")]: {
      borderRight: "none",
      borderLeft: "none",
    },
    zIndex: 0,
  },
  bodyHomeContainer: {
    // overflowY: 'scroll'
  },
}))

export default function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchedXS = useMediaQuery(theme.breakpoints.down("xs"));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Home vo dy ko');
    if (localStorage.getItem('token')) {
      dispatch(loadUser())
    }
  },[dispatch])
  return (
    <Grid
      item
      container
      xs
      direction="column"
      className={ classes.homeContainer }
    >
      { matchedXS ? <TopAppBarMobile openDrawer={ props.toggleDrawerHandler } />
                  : <HomeAppBar />
      }
      <Grid
        item
        container
        direction="column"
        className={ classes.bodyHomeContainer }
      >
        { matchedXS ? null : <TweetBox /> }
        <Posts />
      </Grid>
      { matchedXS ? <AppBarMobileBottom /> : null }
    </Grid>
  )
}
