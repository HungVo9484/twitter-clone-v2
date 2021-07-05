import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import ChatBubbleOutLine from "@material-ui/icons/ChatBubbleOutline";
import Repeat from "@material-ui/icons/Repeat";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import PublishOutlined from "@material-ui/icons/PublishOutlined";
import Tooltip from "@material-ui/core/Tooltip";

import picture from "../../assets/picture.png";
import { deepPurple, green, teal } from "@material-ui/core/colors";

const CssTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.tooltipBackground,
  },
  popper: {
    marginTop: "0.2em",
  },
}))(Tooltip);

const CssTooltip1 = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.tooltipBackground,
  },
  popper: {
    marginTop: "-0.6em",
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  postContainer: {
    borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
  },
  avatarItem: {
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingTop: "0.5em",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
    },
  },
  iconButtonAvatar: {
    padding: 0,
  },
  avatarPost: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: teal[500],
    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(5),
      width: theme.spacing(5),
    },
  },
  moreIconButton: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  tweetContent: {
    width: "97%",
  },
  verifiedIcon: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  twitterMediaContainer: {
    width: "97%",
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "1em",
  },
  twitterMedia: {
    width: "100%",
    verticalAlign: "top",
    cursor: "pointer",
    borderRadius: 20,
  },
  iconTweetContainer: {
    marginTop: "0.2em",
    marginBottom: "0.2em",
  },
  iconReplyItem: {
    "&:hover $replyNumber": {
      color: theme.palette.common.blue,
    },
    "&:hover $iconButtonReplyPost": {
      color: theme.palette.common.blue,
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  iconButtonReplyPost: {
    color: theme.palette.common.fontGrayColor,
  },
  replyNumber: {
    color: theme.palette.common.fontGrayColor,
  },
  iconRetweetItem: {
    "&:hover $retweetNumber": {
      color: green[500],
    },
    "&:hover $iconButtonRetweetPost": {
      color: green[500],
      backgroundColor: "rgba(76, 175, 79, 0.1)",
    },
  },
  iconButtonRetweetPost: {
    color: theme.palette.common.fontGrayColor,
  },
  retweetNumber: {
    color: theme.palette.common.fontGrayColor,
  },
  iconLikeItem: {
    "&:hover $likeNumber": {
      color: "#e91e63",
    },
    "&:hover $iconButtonLikePost": {
      color: "#e91e63",
      backgroundColor: "rgba(233, 30, 98, 0.1)",
    },
  },
  iconButtonLikePost: {
    color: theme.palette.common.fontGrayColor,
  },
  likeNumber: {
    color: theme.palette.common.fontGrayColor,
  },
  iconShareItem: {
    "&:hover $iconButtonSharePost": {
      color: theme.palette.common.blue,
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  iconButtonSharePost: {
    color: theme.palette.common.fontGrayColor,
  },
}));

const Posts = () => {
  const classes = useStyles();
  const [value, setValue] = useState(false);

  console.log(value);

  const post = (
    <Grid item container justify="flex-start" className={classes.postContainer}>
      <Grid item className={classes.avatarItem}>
        <IconButton className={classes.iconButtonAvatar}>
          <Avatar className={classes.avatarPost} />
        </IconButton>
      </Grid>
      <Grid item container xs direction="column">
        <Grid item container justify="space-between">
          <Grid item xs container alignItems="center">
            <Typography variant="h6">DisplayName</Typography>
            <VerifiedUser className={classes.verifiedIcon} />
            <Typography variant="subtitle1">@username</Typography>
          </Grid>
          <IconButton className={classes.moreIconButton}>
            <CssTooltip title="More" enterDelay={300} enterNextDelay={300}>
              <MoreHoriz />
            </CssTooltip>
          </IconButton>
        </Grid>
        <Grid item className={classes.tweetContent}>
          <Typography variant="body1" paragraph>
            Tweet here
          </Typography>
        </Grid>
        <Grid item className={classes.twitterMediaContainer}>
          <img
            className={classes.twitterMedia}
            src={picture}
            alt="Twitter Media"
            onClick={() => setValue(!value)}
          />
        </Grid>
        <Grid
          item
          container
          justify="space-evenly"
          className={classes.iconTweetContainer}
        >
          <Grid item className={classes.iconReplyItem}>
            <CssTooltip1 title="Reply" enterDelay={300} enterNextDelay={300}>
              <IconButton className={classes.iconButtonReplyPost}>
                <ChatBubbleOutLine fontSize="small" />
              </IconButton>
            </CssTooltip1>
            <span className={classes.replyNumber}> 0</span>
          </Grid>
          <Grid item className={classes.iconRetweetItem}>
            <CssTooltip1 title="Retweet" enterDelay={300} enterNextDelay={300}>
              <IconButton className={classes.iconButtonRetweetPost}>
                <Repeat fontSize="small" />
              </IconButton>
            </CssTooltip1>
            <span className={classes.retweetNumber}> 0</span>
          </Grid>
          <Grid item className={classes.iconLikeItem}>
            <CssTooltip1 title="Like" enterDelay={300} enterNextDelay={300}>
              <IconButton className={classes.iconButtonLikePost}>
                <FavoriteBorderOutlined fontSize="small" />
              </IconButton>
            </CssTooltip1>
            <span className={classes.likeNumber}> 0</span>
          </Grid>
          <Grid item className={classes.iconShareItem}>
            <CssTooltip1 title="Share" enterDelay={300} enterNextDelay={300}>
              <IconButton className={classes.iconButtonSharePost}>
                <PublishOutlined fontSize="small" />
              </IconButton>
            </CssTooltip1>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <>
      {post}
      {post}
      {post}
      {post}
      {post}
      {post}
      {post}
      {post}
    </>
  );
};

export default Posts;
