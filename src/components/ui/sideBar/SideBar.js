import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SideMenu from "./sideMenu/SideMenu";
import LogoutButton from "./logoutBar/LogoutButton";


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
}));

const SideBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchedMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      container
      direction="column"
      justify="space-between"
      alignItems={ matchedMD ? "center" : "flex-start" }
      className={ classes.sideBarContainer }
    >
      <SideMenu />
      <LogoutButton />
    </Grid>
  );
};

export default SideBar;
