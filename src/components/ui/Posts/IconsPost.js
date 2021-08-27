import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import ChatBubbleOutLine from '@material-ui/icons/ChatBubbleOutline';
import Repeat from '@material-ui/icons/Repeat';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlined from '@material-ui/icons/PublishOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { green } from '@material-ui/core/colors';


const CssTooltip1 = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.tooltipBackground,
  },
  popper: {
    marginTop: '-0.6em',
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  iconTweetContainer: {
    marginTop: '0.2em',
    marginBottom: '0.2em',
  },
  iconReplyItem: {
    '&:hover $replyNumber': {
      color: theme.palette.common.blue,
    },
    '&:hover $iconButtonReplyPost': {
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
    '&:hover $retweetNumber': {
      color: green[500],
    },
    '&:hover $iconButtonRetweetPost': {
      color: green[500],
      backgroundColor: 'rgba(76, 175, 79, 0.1)',
    },
  },
  iconButtonRetweetPost: {
    color: theme.palette.common.fontGrayColor,
  },
  retweetNumber: {
    color: theme.palette.common.fontGrayColor,
  },
  iconLikeItem: {
    '&:hover $likeNumber': {
      color: '#e91e63',
    },
    '&:hover $iconButtonLikePost': {
      color: '#e91e63',
      backgroundColor: 'rgba(233, 30, 98, 0.1)',
    },
  },
  iconButtonLikePost: {
    color: theme.palette.common.fontGrayColor,
  },
  likeNumber: {
    color: theme.palette.common.fontGrayColor,
  },
  iconShareItem: {
    '&:hover $iconButtonSharePost': {
      color: theme.palette.common.blue,
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  iconButtonSharePost: {
    color: theme.palette.common.fontGrayColor,
  },
}));

const IconsPost = () => {
  const classes = useStyles();
  return (
    <Grid
          item
          container
          justify='space-evenly'
          className={classes.iconTweetContainer}
        >
          <Grid item className={classes.iconReplyItem}>
            <CssTooltip1
              title='Reply'
              enterDelay={300}
              enterNextDelay={300}
            >
              <IconButton className={classes.iconButtonReplyPost}>
                <ChatBubbleOutLine fontSize='small' />
              </IconButton>
            </CssTooltip1>
            <span className={classes.replyNumber}> 0</span>
          </Grid>
          <Grid item className={classes.iconRetweetItem}>
            <CssTooltip1
              title='Retweet'
              enterDelay={300}
              enterNextDelay={300}
            >
              <IconButton className={classes.iconButtonRetweetPost}>
                <Repeat fontSize='small' />
              </IconButton>
            </CssTooltip1>
            <span className={classes.retweetNumber}> 0</span>
          </Grid>
          <Grid item className={classes.iconLikeItem}>
            <CssTooltip1
              title='Like'
              enterDelay={300}
              enterNextDelay={300}
            >
              <IconButton className={classes.iconButtonLikePost}>
                <FavoriteBorderOutlined fontSize='small' />
              </IconButton>
            </CssTooltip1>
            <span className={classes.likeNumber}> 0</span>
          </Grid>
          <Grid item className={classes.iconShareItem}>
            <CssTooltip1
              title='Share'
              enterDelay={300}
              enterNextDelay={300}
            >
              <IconButton className={classes.iconButtonSharePost}>
                <PublishOutlined fontSize='small' />
              </IconButton>
            </CssTooltip1>
          </Grid>
        </Grid>
   );
}
 
export default IconsPost;