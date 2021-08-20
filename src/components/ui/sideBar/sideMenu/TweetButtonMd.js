import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EcoIcon from "@material-ui/icons/Eco";

import CssTooltip from "../../common/CssTooltip";

const useStyles = makeStyles((theme) => ({
  EcoButton: {
    marginTop: "0.5em",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  ecoIcon: {
    color: "white",
  },
}));

const TweetButtonMd = () => {
  const classes = useStyles();
  return (
    <CssTooltip enterDelay={ 300 } enterNextDelay={ 300 } title="Tweet">
    <IconButton className={ classes.EcoButton }>
      <EcoIcon className={ classes.ecoIcon } />
    </IconButton>
  </CssTooltip>
   );
}
 
export default TweetButtonMd;