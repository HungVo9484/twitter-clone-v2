import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const CssTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.tooltipBackground
  },
  popper: {
    marginTop: '-0.5em'
  }
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  profileAppBarContainer: {
    cursor: 'pointer',
    borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
    top: 0,
    backgroundColor: theme.palette.common.background,
    width: '100%',
  },
  toolbarProfile: {
    paddingLeft: '0.5em'
  },
  backProfileIcon: {
    color: theme.palette.common.blue,
    '&:hover': {
        backgroundColor: theme.palette.common.hoverColor
    }
  },
  textAppBarProfile: {
    marginLeft: '1em'
  },
  
}));

export default function AppBarProfile() {
  const classes = useStyles();

  return (
    <AppBar
      position='sticky'
      elevation={ 0 }
      className={ classes.profileAppBarContainer }
    >
      <Toolbar className={ classes.toolbarProfile }>
        <CssTooltip title='Back' enterDelay={ 300 } enterNextDelay={ 300 }>
          <IconButton
            disableRipple
            className={ classes.backProfileIcon }
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </CssTooltip>
        <Typography
          variant='h5'
          className={ classes.textAppBarProfile }
        >
          DisplayName
        </Typography>
      </Toolbar>
    </ AppBar>
  );
}