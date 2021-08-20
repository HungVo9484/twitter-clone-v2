import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CssButton from './CssButton';

const SideButtonLg = ({ option, index, value, onClick }) => {
  const theme = useTheme();
  const matchedMD_height = useMediaQuery('(max-height:45em)');
  const matchedSM_height = useMediaQuery('(max-height:38em)');
  return (
    <CssButton
      startIcon={option.icon}
      disableRipple
      onClick={onClick}
      style={{
        color:
          value === index ? theme.palette.common.blue : undefined,
        marginTop: matchedMD_height ? 0 : '0.5em',
        fontSize: matchedSM_height ? '1rem' : '1.2rem',
      }}
    >
      {option.title}
    </CssButton>
  );
};

export default SideButtonLg;
