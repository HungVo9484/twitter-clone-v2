import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple, teal } from "@material-ui/core/colors";


const useStyles = makeStyles(theme => ({
  avatarItem: {
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingTop: "0.5em",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
    },
  },
  iconButtonAvatar: {
    padding: 0,
  },
  avatarPost: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: teal[500],
    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(5),
      width: theme.spacing(5),
    },
    '&:hover': {
      backgroundColor: teal[700],
    }
  },
}))

const CtmAvatar = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.avatarItem}>
      <IconButton className={classes.iconButtonAvatar}>
        <Avatar className={classes.avatarPost} />
      </IconButton>
    </Grid>
  );
};

export default CtmAvatar;
