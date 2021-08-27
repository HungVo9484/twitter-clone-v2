import {
  makeStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';

import CssTooltip from '../common/CssTooltip';

const useStyles = makeStyles((theme) => ({
  iconsTweetBoxContainer: {
    marginLeft: '-1em',
  },
  tweetBoxIcon: {
    color: theme.palette.common.blue,
    '&:hover': {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
}));

const TweetBoxIcons = () => {
  const classes = useStyles();

  const iconsTweetBox = [
    { icon: <ImageOutlinedIcon />, title: 'Media' },
    { icon: <GifOutlinedIcon />, title: 'Gif' },
    { icon: <PollOutlinedIcon />, title: 'Poll' },
    { icon: <SentimentSatisfiedOutlinedIcon />, title: 'Emoji' },
    { icon: <ScheduleOutlinedIcon />, title: 'Schedule' },
  ];

  return (
    <Grid xs item className={classes.iconsTweetBoxContainer}>
      {iconsTweetBox.map((icon, index) => (
        <CssTooltip
          key={icon.title + index}
          title={icon.title}
          enterDelay={300}
          enterNextDelay={300}
        >
          <IconButton
            aria-label={icon.title}
            key={icon.title + index}
            className={classes.tweetBoxIcon}
          >
            {icon.icon}
          </IconButton>
        </CssTooltip>
      ))}
    </Grid>
  );
};

export default TweetBoxIcons;
