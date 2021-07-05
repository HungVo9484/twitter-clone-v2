import React, { useState } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tooltip from "@material-ui/core/Tooltip";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutLineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EcoIcon from "@material-ui/icons/Eco";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import CheckOutLined from "@material-ui/icons/CheckOutlined";

import LogoutCard from "./SideBarLogoutCard";

const CssButton = withStyles((theme) => ({
  root: {
    "& .MuiSvgIcon-root": {
      fontSize: "1.7rem",
      width: "1.3em",
      marginRight: "0.2em",
    },
    borderRadius: 50,
    fontFamily: "Raleway",
    fontSize: "1.2rem",
    paddingRight: "1.2em",
    color: theme.palette.common.fontColor,
    "&:hover": {
      color: theme.palette.common.blue,
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
}))(Button);

const CssTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.tooltipBackground,
  },
  popper: {
    marginTop: "-0.5em",
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  sideBarContainer: {
    height: "100vh",
    maxWidth: "17em",
    minHeight: "37em",
    position: "sticky",
    top: 0,
    backgroundColor: theme.palette.common.background,
    [theme.breakpoints.down("md")]: {
      maxWidth: "5em",
    },
    zIndex: 10,
  },
  twitterIcon: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  iconButtonSideBar: {
    color: theme.palette.common.fontColor,
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
      color: theme.palette.primary.main,
    },
  },
  EcoButton: {
    marginTop: "0.5em",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  ecoIcon: {
    color: "white",
  },
  tweetSideBarButton: {
    ...theme.typography.button,
    color: "white",
    width: "13.5em",
    height: "3em",
    marginTop: "1em",
  },
  userButtonContainer: {
    width: "15em",
    height: "3.5em",
    borderRadius: 50,
    marginBottom: "0.8em",
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  userIconButtonItem: {
    marginBottom: "0.8em",
  },
  userIconButton: {
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginLeft: "0.2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  logoutCardContainer: {
    height: "100%",
  },
  logoutCardHeaderContainer: {
    marginLeft: "0.5em",
    marginTop: "1em",
    paddingRight: "1em",
    marginBottom: "0.9em",
  },
  logoutCardHeader: {
    width: "fit-content",
  },
  logoutCardCheck: {
    color: theme.palette.common.blue,
  },
  logoutCardOptions: {
    width: "100%",
    borderTop: `1px solid ${theme.palette.common.homeBorder}`,
    paddingLeft: "0.8em",
    paddingTop: "0.5em",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
    paddingBottom: "0.7em",
  },
}));

const SideBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchedMD_height = useMediaQuery("(max-height:45em)");
  const matchedSM_height = useMediaQuery("(max-height:38em)");
  const matchedMD = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);
  const [showLogout, setShowLogout] = useState(false);

  const optionsSideBar = [
    { icon: <HomeIcon />, title: "Home" },
    { icon: <ExploreIcon />, title: "Explore" },
    { icon: <NotificationsNoneIcon />, title: "Notifications" },
    { icon: <MailOutLineIcon />, title: "Messages" },
    { icon: <BookmarkBorderIcon />, title: "Bookmarks" },
    { icon: <ListAltIcon />, title: "Lists" },
    { icon: <PermIdentityIcon />, title: "Profile" },
    { icon: <MoreHorizIcon />, title: "More" },
  ];

  const iconSideBarLG = (option, index) => (
    <CssButton
      startIcon={ option.icon }
      disableRipple
      onClick={ () => setValue(index) }
      style={ {
        color: value === index ? theme.palette.common.blue : undefined,
        marginTop: matchedMD_height ? 0 : "0.5em",
        fontSize: matchedSM_height ? "1rem" : "1.2rem",
      } }
    >
      { option.title }
    </CssButton>
  );

  const iconSideBarMD = (option, index) => (
    <CssTooltip enterDelay={ 300 } enterNextDelay={ 300 } title={ option.title }>
      <IconButton
        disableRipple
        onClick={ () => setValue(index) }
        className={ classes.iconButtonSideBar }
        style={ {
          color: value === index ? theme.palette.common.blue : undefined,
          marginTop: matchedMD_height ? 0 : "0.5em",
          fontSize: matchedSM_height ? "1rem" : "1.2rem",
        } }
      >
        { option.icon }
      </IconButton>
    </CssTooltip>
  );

  const tweetButtonLG = (
    <Button variant="contained" disableRipple disableElevation color="primary"
      className={ classes.tweetSideBarButton }
    >
      Tweet
    </Button>
  );

  const tweetButtonMD = (
    <CssTooltip enterDelay={ 300 } enterNextDelay={ 300 } title="Tweet">
      <IconButton className={ classes.EcoButton }>
        <EcoIcon className={ classes.ecoIcon } />
      </IconButton>
    </CssTooltip>
  );

  const userButtonLG = (
    <Grid item>
      <Button
        className={ classes.userButtonContainer }
        endIcon={ <MoreHorizIcon /> }
        disableRipple
        onClick={ () => setShowLogout(!showLogout) }
      >
        <Grid item container justify="space-between" alignItems="center">
          <Grid item container alignItems="center">
            <Grid item>
              <Avatar className={ classes.avatar } />
            </Grid>
            <Grid item style={ { marginLeft: "0.5em" } }>
              <Typography
                variant="h6"
                style={ {
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  marginBottom: "0.2em",
                } }
              >
                DisplayName
              </Typography>
              <Typography variant="subtitle1">@username</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );

  const userButtonMD = (
    <CssTooltip
      enterDelay={ 300 }
      enterNextDelay={ 300 }
      title="Account"
    >
      <Grid item className={ classes.userIconButtonItem }>
        <IconButton
          className={ classes.userIconButton }
          disableRipple
          onClick={ () => setShowLogout(!showLogout) }
        >
          <Avatar className={ classes.avatar } />
        </IconButton>
      </Grid>
    </CssTooltip>
  );

  const LogoutCardContent = (
    <Grid
      container
      direction="column"
      justify="space-between"
      className={ classes.logoutCardContainer }
    >
      <Grid
        item
        container
        justify="space-between"
        alignItems="center"
        className={ classes.logoutCardHeaderContainer }
      >
        <Grid
          item
          container
          justify="flex-start"
          className={ classes.logoutCardHeader }
          alignItems="center"
        >
          <Grid item>
            <Avatar className={ classes.avatar } />
          </Grid>
          <Grid item style={ { marginLeft: "0.5em" } }>
            <Typography
              variant="h6"
              style={ {
                fontSize: "0.9rem",
                fontWeight: "bold",
                marginBottom: "0.2em",
              } }
            >
              DisplayName
            </Typography>
            <Typography variant="subtitle1">@username</Typography>
          </Grid>
        </Grid>
        <Grid item className={ classes.logoutCardCheck }>
          <CheckOutLined />
        </Grid>
      </Grid>
      <Grid item className={ classes.logoutCardOptions }>
        <Typography variant='body1'>Add an existing account</Typography>
      </Grid>
      <Grid item className={ classes.logoutCardOptions }>
        <Typography variant='body1'>Log out @username</Typography>
      </Grid>
    </Grid>
  );

  return (
    <Grid
      item
      container
      direction="column"
      justify="space-between"
      alignItems={ matchedMD ? "center" : "flex-start" }
      className={ classes.sideBarContainer }
    >
      <Grid
        item
        container
        alignItems={ matchedMD ? "center" : undefined }
        direction="column"
      >
        <Grid item>
          <IconButton
            aria-label="twitter"
            className={ classes.twitterIcon }
            disableRipple
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Grid>
        { optionsSideBar.map((option, index) => (
          <Grid item key={ option.title + index }>
            { matchedMD
              ? iconSideBarMD(option, index)
              : iconSideBarLG(option, index) }
          </Grid>
        )) }
        <Grid item>{ matchedMD ? tweetButtonMD : tweetButtonLG }</Grid>
      </Grid>
      <LogoutCard
        show={ showLogout }
        closed={ setShowLogout }
        content={ LogoutCardContent }
      >
        { matchedMD ? userButtonMD : userButtonLG }
      </LogoutCard>
    </Grid>
  );
};

export default SideBar;
