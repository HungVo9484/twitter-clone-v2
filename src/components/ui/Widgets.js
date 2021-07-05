import React, { useEffect, useRef, useState } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import WidgetsTrends from "./WidgetsTrends";
import WidgetsAppBar from "./WidgetsAppBar";

const CssTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.tooltipBackground,
  },
  popper: {
    marginTop: "-0.5em",
  },
}))(Tooltip);

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
  const theme = useTheme();
 

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
