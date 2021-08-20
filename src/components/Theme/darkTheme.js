import { createMuiTheme } from '@material-ui/core/styles';

const BLUE = '#1DA1F2';
const LIGHT_BLUE = 'rgba(53, 168, 240, 0.1)'
const BLACK = '#14171A';
const DARK_GRAY = '#657786';
const LIGHT_GRAY = '#AAB8C2';
const EXTRA_LIGHT_GRAY = '#E1E8ED';
const EXTRA_EXTRA_LIGHT_GRAY = '#F5F8FA';
const WHITE = '#FFFFFF';
const FONT_FAMILY = 'Open Sans'

//TODO ----------Dark Theme--------------------
// eslint-disable-next-line
const themeOption = {
  backgroundColor: 'black',
  logoColor: '#D9D9D9',
  fontColor: '#D9D9D9',
  fontGray: DARK_GRAY,
  borderTextField: '#2F3336',
  homeBorder: 'rgba(101, 119, 134, 0.3)',
  backDrop: 'rgba(83, 100, 113, 0.3)',
  tooltipBackground: 'rgba(101, 119, 134, 0.5)',
  searchBackgroundColor: 'rgb(6, 29, 37)',
  trendsColor: 'rgb(6, 29, 37)',
  drawerBackground: 'rgb(6, 29, 37)',
  inputBorderColor: 'rgb(110, 118, 125)',
  labelFontColor: 'rgb(110, 118, 125)',
  body1FontColor: 'rgb(110, 118, 125)'
};


const darkTheme = createMuiTheme({
    id: 'dark',
    palette: {
        common: {
            blue: BLUE,
            black: `${BLACK}`,
            dark_gray: `${DARK_GRAY}`,
            light_gray: `${LIGHT_GRAY}`,
            extra_light_gray: `${EXTRA_LIGHT_GRAY}`,
            extra_extra_light_gray: `${EXTRA_EXTRA_LIGHT_GRAY}`,
            white: `${WHITE}`,
            hoverColor: LIGHT_BLUE,
            background: themeOption.backgroundColor,
            fontColor: themeOption.fontColor,
            logoColor: themeOption.logoColor,
            fontGrayColor: themeOption.fontGray,
            borderTextField: themeOption.borderTextField,
            homeBorder: themeOption.homeBorder,
            backDrop: themeOption.backDrop,
            tooltipBackground: themeOption.tooltipBackground,
            searchBackgroundColor: themeOption.searchBackgroundColor,
            trendsColor: themeOption.trendsColor,
            drawerBackground: themeOption.drawerBackground,
            inputBorderColor: themeOption.inputBorderColor,
            labelFontColor: themeOption.labelFontColor,
            body1FontColor: themeOption.body1FontColor
        },
        primary: {
            main: BLUE
        },
        secondary: {
            main: '#0F1419'
        }
    },
    typography: {
        h1: {
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: '4rem',
            lineHeight: '5.25rem',
            color: themeOption.fontColor
        },
        h2: {
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: '2.5rem',
            lineHeight: '3.25rem',
            color: themeOption.fontColor
        },
        h3: {
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: '1.94rem',
            lineHeight: '2.25rem',
            color: themeOption.fontColor
        },
        h4: {
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: '1.44rem',
            lineHeight: '1.75rem',
            color: themeOption.fontColor
        },
        h5: {
            fontFamily: FONT_FAMILY,
            fontSize: '1.3rem',
            fontWeight: 700,
            color: themeOption.fontColor
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 800,
            fontFamily: FONT_FAMILY,
            color: themeOption.fontColor,
            lineHeight: '1.25rem'
        },
        subtitle1: {
            fontFamily: 'Cabin',
            fontSize: '1rem',
            fontWeight: 400,
            color: themeOption.fontGray,
            lineHeight: 1
        },
        subtitle2: {
            fontFamily: 'Cabin',
            color: BLUE,
            fontSize: '1.2rem',
            fontWeight: 400,
        },
        body1: {
            fontFamily: FONT_FAMILY,
            fontSize: '0.9rem',
            color: themeOption.body1FontColor,
            fontWeight: 400
        },
        button: {
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 800,
            lineHeight: '1.25rem',
            fontFamily: FONT_FAMILY,
            borderRadius: 50,
        }
    },
    overrides: {
        MuiInputBase: {
            root: {
                color: themeOption.fontColor,
                fontWeight: 300,
            },
        },
        MuiButton: {
            endIcon: {
                marginRight: '0.2em'
            }
        }
    }
});

 
export default darkTheme;