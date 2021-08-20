import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import CheckOutLined from '@material-ui/icons/CheckOutlined';

import LogoutCard from './SideBarLogoutCard';
import LogoutButtonLg from './LogoutButtonLg';
import LogoutButtonMd from './LogoutButtonMd';
import AuthContext from '../../../../hooks/auth-context';

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginLeft: '0.2em',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  },
  logoutCardContainer: {
    height: '100%',
  },
  logoutCardHeaderContainer: {
    marginLeft: '0.5em',
    marginTop: '1em',
    paddingRight: '1em',
    marginBottom: '0.9em',
  },
  logoutCardHeader: {
    width: 'fit-content',
  },
  logoutCardCheck: {
    color: theme.palette.common.blue,
  },
  logoutCardOptions: {
    width: '100%',
    borderTop: `1px solid ${theme.palette.common.homeBorder}`,
    paddingLeft: '0.8em',
    paddingTop: '0.5em',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.common.hoverColor,
    },
    paddingBottom: '0.7em',
  },
}));

const LogoutButton = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchedMD = useMediaQuery(theme.breakpoints.down('md'));
  const { isShowLogout, showLogout, onLogout } =
    useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    onLogout(history);
  };

  const LogoutCardContent = (
    <Grid
      container
      direction='column'
      justify='space-between'
      className={classes.logoutCardContainer}
    >
      <Grid
        item
        container
        justify='space-between'
        alignItems='center'
        className={classes.logoutCardHeaderContainer}
      >
        <Grid
          item
          container
          justify='flex-start'
          className={classes.logoutCardHeader}
          alignItems='center'
        >
          <Grid item>
            <Avatar className={classes.avatar} />
          </Grid>
          <Grid item style={{ marginLeft: '0.5em' }}>
            <Typography
              variant='h6'
              style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '0.2em',
              }}
            >
              DisplayName
            </Typography>
            <Typography variant='subtitle1'>@username</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.logoutCardCheck}>
          <CheckOutLined />
        </Grid>
      </Grid>
      <Grid item className={classes.logoutCardOptions}>
        <Typography variant='body1'>
          Add an existing account
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.logoutCardOptions}
        onClick={logoutHandler}
      >
        <Typography variant='body1'>Log out @username</Typography>
      </Grid>
    </Grid>
  );

  return (
    <LogoutCard
      show={isShowLogout}
      closed={showLogout}
      content={LogoutCardContent}
    >
      {matchedMD ? <LogoutButtonMd /> : <LogoutButtonLg />}
    </LogoutCard>
  );
};

export default LogoutButton;
