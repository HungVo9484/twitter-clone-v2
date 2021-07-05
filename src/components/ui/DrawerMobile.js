import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FlashOnOutlinedIcon from "@material-ui/icons/FlashOnOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import WidgetsOutlinedIcon from "@material-ui/icons/WidgetsOutlined";
import { teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "20em",
    
  },
  drawerPaper: {
    width: "20em",
    backgroundColor: theme.palette.common.drawerBackground,
  },
  drawerContent: {
    height: '100%',
  },
  drawerHeader: {
    marginTop: '1em',
    paddingLeft: '1.5em',
    paddingRight: '1em',
    marginBottom: '1em'
  },
  drawerAvatarIcon: {
    padding: 0,
  },
  drawerAvatar: {
    backgroundColor: teal[500],
  },
  accountIcon: {
    padding: 0,
    color: theme.palette.common.blue
  },
  displayNameItem: {
    paddingLeft: '1.5em'
  },
  displayName: {
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
  followItem: {
    paddingLeft: '1.5em',
    marginTop: '1em'
  },
  followItemContent: {
    fontSize: '1rem'
  },
  drawerItemList: {
    marginTop: '1em',
    marginBottom: '1em'
  },
  drawerListItem: {
    fontSize: '1.2em',
    fontFamily: 'inherit'
  },
  listItemIcon: {
    color: theme.palette.common.fontGrayColor
  },
  listItemText: {
    color: theme.palette.common.fontColor
  },
  drawerDivider: {
    backgroundColor: theme.palette.common.fontGrayColor
  },
  settingContainer: {
    marginTop: '1em'
  },
  settingListItem: {
    paddingLeft: '1.5em',
  },
  settingText: {
    color: theme.palette.common.fontColor
  },
  drawerFooter: {
    paddingLeft: '1.5em',
    paddingRight: '1em',
    marginBottom: '1em'
  },
  drawerFooterIcon: {
    padding: 0,
    color: theme.palette.common.blue
  },

}));

export default function DrawerMobile(props) {
  const classes = useStyles();

  const drawerLists = [
    { text: "Profile", icon: <PersonOutlineIcon /> },
    { text: "Lists", icon: <ListAltOutlinedIcon /> },
    { text: "Topics", icon: <ChatOutlinedIcon /> },
    { text: "Bookmarks", icon: <BookmarkBorderOutlinedIcon /> },
    { text: "moments", icon: <FlashOnOutlinedIcon /> },
  ];

  return (
    <SwipeableDrawer
      variant='temporary'
      anchor="left"
      open={ props.openDrawer }
      onClose={ props.closeDrawer }
      onOpen={ () => { } }
      className={ classes.drawer }
      classes={ {
        paper: classes.drawerPaper,
      } }
      ModalProps={ { onBackdropClick: props.closeDrawer } }
    >
      <Grid
        container
        direction="column"
        justify='space-between'
        className={ classes.drawerContent }
      >
        <Grid item container direction="column">
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            className={ classes.drawerHeader }
          >
            <Grid item>
              <IconButton disableRipple className={ classes.drawerAvatarIcon }>
                <Avatar className={ classes.drawerAvatar } />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton disableRipple className={ classes.accountIcon }>
                <AccountBoxOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item className={ classes.displayNameItem }>
            <Typography
              variant="h6"
              className={ classes.displayName }
            >
              DisplayName
            </Typography>
            <Typography variant="subtitle1">@username</Typography>
          </Grid>
          <Grid item className={ classes.followItem }>
            <Typography
              variant="subtitle1"
              className={ classes.followItemContent }>
              41 Following 3 Follower
            </Typography>
          </Grid>
          <Grid item className={classes.drawerItemList}>
            <List>
              { drawerLists.map((item, index) => (
                <ListItem
                  key={ item.text + index }
                  className={ classes.drawerListItem }
                >
                  <ListItemIcon children={ item.icon } className={classes.listItemIcon} />
                  <ListItemText children={ item.text } className={ classes.listItemText } />
                </ListItem>
              )) }
            </List>
          </Grid>
          <Divider className={classes.drawerDivider} />
          <Grid item className={classes.settingContainer}>
            <List>
              <ListItem className={classes.settingListItem}>
                <ListItemText
                  children={ "Settings and privacy" }
                  className={ classes.settingText }
                />
              </ListItem>
              <ListItem className={classes.settingListItem}>
                <ListItemText
                  children={ "Help Center" }
                  className={ classes.settingText }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid item container
          justify='space-between'
          className={ classes.drawerFooter }
        >
          <Grid item>
            <IconButton disableRipple className={classes.drawerFooterIcon}>
              <EmojiObjectsOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton disableRipple className={classes.drawerFooterIcon}>
              <WidgetsOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
}
