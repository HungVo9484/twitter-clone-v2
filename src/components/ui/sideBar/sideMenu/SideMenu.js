import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutLineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import SideButtonMd from './SideButtonMd';
import SideButtonLg from './SideButtonLg';
import TweetButtonMd from './TweetButtonMd';
import TweetButtonLg from './TweetButtonLg';

const useStyles = makeStyles((theme) => ({
  twitterIcon: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
}));

const optionsSideBar = [
  { icon: <HomeIcon />, title: 'Home' },
  { icon: <ExploreIcon />, title: 'Explore' },
  { icon: <NotificationsNoneIcon />, title: 'Notifications' },
  { icon: <MailOutLineIcon />, title: 'Messages' },
  { icon: <BookmarkBorderIcon />, title: 'Bookmarks' },
  { icon: <ListAltIcon />, title: 'Lists' },
  { icon: <PermIdentityIcon />, title: 'Profile' },
  { icon: <MoreHorizIcon />, title: 'More' },
];

const SideMenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchedMD = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState(0);

  return (
    <Grid
      item
      container
      alignItems={matchedMD ? 'center' : undefined}
      direction='column'
    >
      <Grid item>
        <IconButton
          aria-label='twitter'
          className={classes.twitterIcon}
          disableRipple
        >
          <TwitterIcon fontSize='large' />
        </IconButton>
      </Grid>
      {optionsSideBar.map((option, index) => (
        <Grid item key={option.title}>
          {matchedMD ? (
            <SideButtonMd
              option={option}
              index={index}
              value={value}
              onClick={() => setValue(index)}
            />
          ) : (
            <SideButtonLg
              option={option}
              index={index}
              value={value}
              onClick={() => setValue(index)}
            />
          )}
        </Grid>
      ))}
      <Grid item>{matchedMD ? <TweetButtonMd /> : <TweetButtonLg />}</Grid>
    </Grid>
  );
};

export default SideMenu;
