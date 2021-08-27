import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CtmAvatar from './Avatar';
import PostHeadContent from './PostHeadContent';
import TweetContent from './TweetContent';
import TweetImage from './TweetImage';
import IconsPost from './IconsPost';

const useStyles = makeStyles((theme) => ({
  postContainer: {
    borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
  },
  
}));

const Posts = () => {
  const classes = useStyles();

  const post = (
    <Grid
      item
      container
      justify='flex-start'
      className={classes.postContainer}
    >
      <CtmAvatar />
      <Grid item container xs direction='column'>
        <PostHeadContent />
        <TweetContent />
        <TweetImage />
        <IconsPost />
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
