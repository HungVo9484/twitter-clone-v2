import React from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  widgetsAppBar: {
    backgroundColor: theme.palette.common.background,
    top: 0,
  },
  search: {
    width: "100%",
    display: "flex",
    backgroundColor: theme.palette.common.searchBackgroundColor,
    alignContent: "center",
    borderRadius: 50,
    marginLeft: "2em",
  },
  searchIcon: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    color: "gray",
  },
}));

const WidgetsAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" elevation={0} className={classes.widgetsAppBar}>
      <Toolbar disableGutters>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search Twitter..."
            inputProps={{ "aria-label": "search" }}
            fullWidth
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default WidgetsAppBar;
