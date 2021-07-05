import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutLineIcon from "@material-ui/icons/MailOutline";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import EcoIcon from "@material-ui/icons/Eco";

const useStyles = makeStyles((theme) => ({
  bottomAppBarMobile: {
    top: "auto",
    bottom: 0,
    height: "3.5em",
    backgroundColor: theme.palette.common.background,
    borderTop: `1px solid ${theme.palette.common.homeBorder}`,
  },
  bottomMobileIconContainer: {
    marginBottom: "0.7em",
  },
  bottomMobileIcon: {
    padding: 0,
    color: theme.palette.common.fontColor,
  },
  EcoButton: {
    position: "absolute",
    right: "0.5em",
    top: "-2.5em",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  ecoIcon: {
    color: "white",
  },
}));

export default function BottomAppBarMobile(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [selectedIcon, setSelectedIcon] = useState(0);

  return (
    <AppBar position="fixed" className={classes.bottomAppBarMobile}>
      <Toolbar disableGutters>
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          className={classes.bottomMobileIconContainer}
        >
          <Grid item>
            <IconButton
              className={classes.bottomMobileIcon}
              onClick={() => setSelectedIcon(0)}
              style={{
                color:
                  selectedIcon === 0 ? theme.palette.common.blue : undefined,
              }}
            >
              <HomeIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.bottomMobileIcon}
              onClick={() => setSelectedIcon(1)}
              style={{
                color:
                  selectedIcon === 1 ? theme.palette.common.blue : undefined,
              }}
            >
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.bottomMobileIcon}
              onClick={() => setSelectedIcon(2)}
              style={{
                color:
                  selectedIcon === 2 ? theme.palette.common.blue : undefined,
              }}
            >
              <NotificationsNoneIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.bottomMobileIcon}
              onClick={() => setSelectedIcon(3)}
              style={{
                color:
                  selectedIcon === 3 ? theme.palette.common.blue : undefined,
              }}
            >
              <MailOutLineIcon />
            </IconButton>
          </Grid>
        </Grid>
        <IconButton className={classes.EcoButton}>
          <EcoIcon className={classes.ecoIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
