import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CssButton = withStyles((theme) => ({
  root: {
    "& .MuiSvgIcon-root": {
      fontSize: "1.7rem",
      width: "1.3em",
      marginRight: "0.2em",
    },
    borderRadius: 50,
    fontFamily: "Raleway",
    fontSize: "1.2rem",
    paddingRight: "1.2em",
    color: theme.palette.common.fontColor,
    "&:hover": {
      color: theme.palette.common.blue,
      backgroundColor: theme.palette.common.hoverColor,
    },
  },
}))(Button);

export default CssButton;