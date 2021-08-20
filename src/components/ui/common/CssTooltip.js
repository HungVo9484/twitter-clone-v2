import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const CssTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.tooltipBackground,
  },
  popper: {
    marginTop: "-0.5em",
  },
}))(Tooltip);

export default CssTooltip;