import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import picture from "../../../assets/picture.png";


const useStyles = makeStyles(theme => ({
  twitterMediaContainer: {
    width: "97%",
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "1em",
  },
  twitterMedia: {
    width: "100%",
    verticalAlign: "top",
    cursor: "pointer",
    borderRadius: 20,
  },
}))


const TweetImage = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.twitterMediaContainer}>
          <img
            className={classes.twitterMedia}
            src={picture}
            alt="Twitter Media"
            // onClick={() => setValue(!value)}
          />
        </Grid>
   );
}
 
export default TweetImage;