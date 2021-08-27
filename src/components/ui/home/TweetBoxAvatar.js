import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  homeAvatar: {
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '0.5em',
  },
  avatarButton: {
    padding: 0,
  },
  avatarSize: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
  },
}));

const TweetBoxAvatar = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  return (
    <Grid item className={classes.homeAvatar}>
      <IconButton
        disableRipple
        className={classes.avatarButton}
        component={Link}
        to={`/${user && user.username}`}
      >
        <Avatar className={classes.avatarSize} />
      </IconButton>
    </Grid>
  );
};

export default TweetBoxAvatar;
