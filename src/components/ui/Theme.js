import { createMuiTheme } from '@material-ui/core/styles';

const BLUE = '#1DA1F2';
const LIGHT_BLUE = 'rgba(53, 168, 240, 0.1)'
const BLACK = '#14171A';
const DARK_GRAY = '#657786';
const LIGHT_GRAY = '#AAB8C2';
const EXTRA_LIGHT_GRAY = '#E1E8ED';
const EXTRA_EXTRA_LIGHT_GRAY = '#F5F8FA';
const WHITE = '#FFFFFF';

//TODO ----------Light Theme--------------------

const lightTheme = {
    backgroundColor: WHITE,
    fontColor: BLACK,
    fontGray: DARK_GRAY,
    borderTextField: BLACK,
    homeBorder: EXTRA_LIGHT_GRAY,
    backDrop: 'rgba(0, 131, 179, 0.198)',
    tooltipBackground: 'rgba(101, 119, 134, 0.9)',
    searchBackgroundColor: EXTRA_LIGHT_GRAY,
    trendsColor: EXTRA_EXTRA_LIGHT_GRAY,
    drawerBackground: WHITE
};

const darkTheme = {
    backgroundColor: 'black',
    fontColor: EXTRA_LIGHT_GRAY,
    fontGray: DARK_GRAY,
    borderTextField: LIGHT_GRAY,
    homeBorder: 'rgba(101, 119, 134, 0.3)',
    backDrop: 'rgba(0, 131, 179, 0.3)',
    tooltipBackground: 'rgba(101, 119, 134, 0.5)',
    searchBackgroundColor: 'rgb(6, 29, 37)',
    trendsColor: 'rgb(6, 29, 37)',
    drawerBackground: 'rgb(6, 29, 37)'
};

const themeOption = darkTheme;

const theme = createMuiTheme({
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
            fontGrayColor: themeOption.fontGray,
            borderTextField: themeOption.borderTextField,
            homeBorder: themeOption.homeBorder,
            backDrop: themeOption.backDrop,
            tooltipBackground: themeOption.tooltipBackground,
            searchBackgroundColor: themeOption.searchBackgroundColor,
            trendsColor: themeOption.trendsColor,
            drawerBackground: themeOption.drawerBackground
        },
        primary: {
            main: BLUE
        },
        secondary: {
            main: BLACK
        }
    },
    typography: {
        h1: {
            fontFamily: 'Cabin',
            fontWeight: 800,
            fontSize: '4.5rem',
            lineHeight: 1.5,
            color: themeOption.fontColor
        },
        h2: {
            fontFamily: 'Cabin',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.5,
            color: themeOption.fontColor
        },
        h3: {
            fontFamily: 'Cabin',
            fontSize: '2.5rem',
            color: BLUE,
        },
        h4: {
            fontFamily: 'Cabin',
            fontSize: '1.75rem',
            fontWeight: 700,
            color: themeOption.fontColor
        },
        h5: {
            fontFamily: 'Cabin',
            fontSize: '1.3rem',
            fontWeight: 600,
            color: themeOption.fontColor
        },
        h6: {
            fontSize: '0.9rem',
            fontWeight: 'bold',
            fontFamily: 'Cabin',
            color: themeOption.fontColor,
            lineHeight: 1
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
            fontFamily: 'Cabin',
            fontSize: '1rem',
            color: themeOption.fontColor,
            fontWeight: 400
        },
        button: {
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            fontFamily: 'Cabin',
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

 
export default theme;