import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import AuthContext from "../../../../hooks/auth-context";

const useStyles = makeStyles((theme) => ({
  userButtonContainer: {
    width: "15em",
    height: "3.5em",
    borderRadius: 50,
    marginBottom: "0.8em",
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginLeft: "0.2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
}))

const LogoutButtonLg = () => {
  const classes = useStyles();
  const { showLogout } = useContext(AuthContext)
  const user = useSelector(state => state.auth.user)
  
  return (
    <Grid item>
    <Button
      className={ classes.userButtonContainer }
      endIcon={ <MoreHorizIcon /> }
      disableRipple
      onClick={ showLogout}
    >
      <Grid item container justify="space-between" alignItems="center">
        <Grid item container alignItems="center">
          <Grid item>
            <Avatar className={ classes.avatar } />
          </Grid>
          <Grid item style={ { marginLeft: "0.5em" } }>
            <Typography
              variant="h6"
              style={ {
                fontSize: "0.9rem",
                fontWeight: "bold",
                marginBottom: "0.2em",
              } }
            >
              {user && user.name}
            </Typography>
            <Typography variant="subtitle1">@{user && user.username}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Button>
  </Grid>
   );
}
 
export default LogoutButtonLg;