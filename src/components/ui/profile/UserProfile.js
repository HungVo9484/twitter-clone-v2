import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

import bikini from '../../../assets/bikini.jpg';

const ImageCover = styled.div`
  background-image: url(${p => p.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const useStyles = makeStyles((theme) => ({
  imageCoverItem: {
    width: '100%',
    height: '12.5em',
    [theme.breakpoints.down('xs')]: {
      height: '9em'
    }
  },
  userProfileContainer: {
    paddingTop: '1em',
    paddingLeft: '1em',
    paddingRight: '1em'
  },
  avatarProfile: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    marginTop: '-4.4em',
    border: `0.3em solid ${theme.palette.common.background}`,
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginTop: '-2em',
      border: `0.1em solid ${theme.palette.common.background}`,
    }
  },
  btnEditProfile: {
    ...theme.typography.button,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem'
    },
    '&:hover': {
      backgroundColor: theme.palette.common.hoverColor
    }
  },
  displayName: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
  },
  bio: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
  },
  event: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
  },
  eventIcon: {
    color: theme.palette.common.fontColor
  },
  follow: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
  }

}));

export default function UserProfile() {
  const classes = useStyles();

  return (
    <Grid item container direction='column'>
      <Grid item className={ classes.imageCoverItem }>
        <ImageCover imageUrl={ bikini } />
      </Grid>
      <Grid item container direction='column' className={classes.userProfileContainer}>
        <Grid item container justify='space-between'>
          <Grid item>
            <Avatar className={ classes.avatarProfile } />
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              disableRipple
              className={ classes.btnEditProfile }
            >Edit Profile</Button>
          </Grid>
        </Grid>
        <Grid item className={classes.displayName}>
          <Typography variant='h5'>DisplayName</Typography>
          <Typography variant='subtitle1'>@username</Typography>
        </Grid>
        <Grid item className={classes.bio}>
          <Typography variant='h6'>Yeu doi yeu nguoi</Typography>
        </Grid>
        <Grid item container className={classes.event}>
          <EventOutlinedIcon className={ classes.eventIcon}/>
          <Typography>Joined April 2020</Typography>
        </Grid>
        <Grid item className={classes.follow}>
          <Typography>41 Following 3 Followers</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}