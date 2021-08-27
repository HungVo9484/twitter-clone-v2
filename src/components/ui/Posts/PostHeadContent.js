import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import CssTooltip from '../common/CssTooltip';

const useStyles = makeStyles((theme) => ({
  verifiedIcon: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  moreIconButton: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
}));

const PostHeadContent = () => {
  const classes = useStyles();
  const user = useSelector(state => state.auth.user)
  return (
    <Grid item container justify='space-between'>
      <Grid item xs container alignItems='center'>
        <Typography variant='h6'>{ user && user.name }</Typography>
        <VerifiedUser className={classes.verifiedIcon} />
        <Typography variant='subtitle1'>@{user && user.username}</Typography>
      </Grid>
      <IconButton className={classes.moreIconButton}>
        <CssTooltip
          title='More'
          enterDelay={300}
          enterNextDelay={300}
        >
          <MoreHoriz />
        </CssTooltip>
      </IconButton>
    </Grid>
  );
};

export default PostHeadContent;
