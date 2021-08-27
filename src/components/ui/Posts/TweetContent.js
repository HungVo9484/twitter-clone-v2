import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  tweetContent: {
    width: "97%",
  },
}));


const TweetContent = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.tweetContent}>
      <Typography variant='body1' paragraph>
        Tweet here
      </Typography>
    </Grid>
  );
};

export default TweetContent;
