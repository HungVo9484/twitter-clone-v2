import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SideBar from "./SideBar";
import Widgets from "./Widgets";
import DrawerMobile from "./DrawerMobile";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: 1250,
    marginLeft: "auto",
    marginRight: "auto",
  },
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
}));

const Main = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchedXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchedSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={ classes.mainContainer }>
      { matchedXS
        ? <DrawerMobile
          openDrawer={ props.openDrawer }
          closeDrawer={ props.toggleDrawerHandler }
        />
        : <SideBar />
      }
      { props.children }
      { matchedSM ? null : <Widgets /> }
    </Grid>
  );
};

export default Main;
