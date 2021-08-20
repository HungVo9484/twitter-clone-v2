import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from "@material-ui/core/IconButton";

import CssTooltip from "../../common/CssTooltip";

const useStyles = makeStyles((theme) => ({
  iconButtonSideBar: {
    color: theme.palette.common.fontColor,
    "&:hover": {
      backgroundColor: theme.palette.common.hoverColor,
      color: theme.palette.primary.main,
    },
  },
}));

const SideButtonMd = ({option, index, value, onClick}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchedMD_height = useMediaQuery('(max-height:45em)');
  const matchedSM_height = useMediaQuery('(max-height:38em)');
console.log(option);
  return (
    <CssTooltip enterDelay={ 300 } enterNextDelay={ 300 } title={ option.title }>
      <IconButton
        disableRipple
        onClick={onClick}
        className={ classes.iconButtonSideBar }
        style={ {
          color: value === index ? theme.palette.common.blue : undefined,
          marginTop: matchedMD_height ? 0 : "0.5em",
          fontSize: matchedSM_height ? "1rem" : "1.2rem",
        } }
      >
        { option.icon }
      </IconButton>
    </CssTooltip>
   );
}
 
export default SideButtonMd;