import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import WidgetsTrends from "./WidgetsTrends";
import WidgetsAppBar from "./WidgetsAppBar";

const useStyles = makeStyles((theme) => ({
  widgetsContainer: {
    maxWidth: 380,
    position: 'sticky',
    top: 0,
    height: '100%',
  },
  widgetsContentContainer: {
    paddingLeft: '2em'
  }
}));

const Widgets = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      xs
      direction="column"
      className={classes.widgetsContainer}
    >
      <WidgetsAppBar />
      <Grid item container direction='column' className={classes.widgetsContentContainer}>
        <WidgetsTrends />
      </Grid>
    </Grid>
  );
};

export default Widgets;
