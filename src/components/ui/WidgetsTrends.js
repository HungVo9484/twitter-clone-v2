import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const CssTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.tooltipBackground,
  },
  popper: {
    marginTop: "-0.5em",
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  trendsContainer: {
    borderRadius: 20,
    backgroundColor: theme.palette.common.trendsColor,
    marginTop: "0.5em",
    marginBottom: '1em',
    position: 'sticky',
  },

  trendsHeader: {
    height: "4em",
    borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
    paddingLeft: theme.spacing(2),
  },
  settingsIcon: {
    marginRight: "0.5em",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  trendsBodyContainer: {
    borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
  },
  trendsContent: {
    padding: theme.spacing(2),
  },
  moreIcon: {
    color: theme.palette.common.fontColor,
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  trendsShowMoreContainer: {
    padding: theme.spacing(2),
  },
}));

const Trends = () => {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
  }, []);

  const trendsContent = (
    <Grid
      item
      container
      justify="space-between"
      className={classes.trendsBodyContainer}
    >
      <Grid item className={classes.trendsContent}>
        <Typography variant="subtitle1">Trending in Vietnam</Typography>
        <Typography variant="h6" style={{ lineHeight: 2 }}>
          ShowBiz
        </Typography>
        <Typography variant="subtitle1">28.2k Tweets</Typography>
      </Grid>
      <Grid item className={classes.trendsMoreIcon}>
        <CssTooltip enterDelay={300} enterNextDelay={300} title="More">
          <IconButton className={classes.moreIcon}>
            <MoreHorizIcon />
          </IconButton>
        </CssTooltip>
      </Grid>
    </Grid>
  );
  return (
    <Grid
      item
      container
      direction="column"
      className={classes.trendsContainer}
    >
      <Grid
        item
        container
        justify="space-between"
        alignItems="center"
        className={classes.trendsHeader}
      >
        <Grid item>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Trends for you
          </Typography>
        </Grid>
        <Grid item>
          <CssTooltip enterDelay={300} enterNextDelay={300} title="Settings">
            <IconButton className={classes.settingsIcon}>
              <SettingsIcon />
            </IconButton>
          </CssTooltip>
        </Grid>
      </Grid>
      {trendsContent}
      {trendsContent}
      {trendsContent}
      {trendsContent}
      

      {showMore ? trendsContent : null}
      {showMore ? trendsContent : null}
      {showMore ? trendsContent : null}
      {showMore ? trendsContent : null}
      {showMore ? trendsContent : null}
      {showMore ? trendsContent : null}

      <Grid item className={classes.trendsShowMoreContainer}>
        <div className={classes.trendsShowMore} onClick={() => setShowMore(!showMore)}>
          <Typography variant="subtitle2">Show more</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Trends;
