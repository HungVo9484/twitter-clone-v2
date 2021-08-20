
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";

import CssTooltip from "../../common/CssTooltip";
import AuthContext from "../../../../hooks/auth-context";

const useStyles = makeStyles((theme) => ({
  userIconButtonItem: {
    marginBottom: "0.8em",
  },
  userIconButton: {
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

const LogoutButtonMd = () => {
  const classes = useStyles()
  const { showLogout } = useContext(AuthContext);
  return (
    <CssTooltip enterDelay={300} enterNextDelay={300} title='Account'>
      <Grid item className={classes.userIconButtonItem}>
        <IconButton
          className={classes.userIconButton}
          disableRipple
          onClick={showLogout}
        >
          <Avatar className={classes.avatar} />
        </IconButton>
      </Grid>
    </CssTooltip>
  );
};

export default LogoutButtonMd;
