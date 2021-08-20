import {
  makeStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Logo } from '../../../assets/twitterLogo.svg';
import twitterBackground from '../../../assets/twitterBackground.png';

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    backgroundImage: `url(${twitterBackground})`,
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      height: '30em',
      margin: 0,
    },
  },
  twitterImageItem: {
    maxWidth: '40em',
    padding: '20%',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  twitterImg: {
    width: '100%',
    '& path': {
      fill: 'white',
    },
  },
}))


const LeftSide = () => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      md
      justify='center'
      alignItems='center'
      className={classes.leftContainer}
    >
      <Grid item className={classes.twitterImageItem}>
        <Logo className={classes.twitterImg} />
      </Grid>
    </Grid>
  );
};

export default LeftSide;
