import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  tweetSideBarButton: {
    ...theme.typography.button,
    color: "white",
    width: "13.5em",
    height: "3em",
    marginTop: "1em",
  },
}));

const TweetButtonLg = () => {
  const classes = useStyles()
  return (
    <Button variant="contained" disableRipple disableElevation color="primary"
    className={ classes.tweetSideBarButton }
  >
    Tweet
  </Button>
  );
}
 
export default TweetButtonLg;
