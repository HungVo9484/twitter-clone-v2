import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import AppBarProfile from '../ui/profile/AppBarProfile';
import UserProfile from '../ui/profile/UserProfile';
import ProfileButton from '../ui/profile/NavProfile';
import Posts from '../ui/Posts/Post';
import AppBarMobileBottom from '../ui/AppBarMobileBottom';

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    flexGrow: 2,
    maxWidth: 600,
    borderRight: `1px solid ${theme.palette.common.homeBorder}`,
    borderLeft: `1px solid ${theme.palette.common.homeBorder}`,
    [theme.breakpoints.down("xs")]: {
      borderRight: "none",
      borderLeft: "none",
    },
    zIndex: 0,
  }

}))

export default function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  const matchedXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid item container xs
      direction='column'
      className={ classes.profileContainer }
    >
      <AppBarProfile />
      <UserProfile />
      <ProfileButton />
      <Posts />
      { matchedXS ? <AppBarMobileBottom /> : null }
    </Grid>
  );
}