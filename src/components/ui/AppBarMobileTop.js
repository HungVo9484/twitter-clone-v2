import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import IconButton from "@material-ui/core/IconButton";

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  topBarContainer: {
    backgroundColor: theme.palette.common.background,
    borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
  },
  topBarMobileIcon: {
    padding: 0,
    color: theme.palette.common.blue,
  },
}));

export default function AppBarMobileTop(props) {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <CssBaseLine />
      <HideOnScroll {...props}>
        <AppBar
          position="sticky"
          elevation={0}
          className={classes.topBarContainer}
        >
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <IconButton
                  className={classes.topBarMobileIcon}
                  onClick={() => props.openDrawer()}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton className={classes.topBarMobileIcon}>
                  <TwitterIcon style={{ fontSize: "1.4em" }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton className={classes.topBarMobileIcon}>
                  <StarHalfIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
