import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import CssTooltip from '../common/CssTooltip';

const useStyles = makeStyles((theme) => ({
    homeAppBarContainer: {
        cursor: 'pointer',
        borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
        top: 0,
        backgroundColor: theme.palette.common.background,
        width: '100%',
    },
    buttonHome: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    textHome: {
        fontWeight: 800,
    },
    topTweetsIcon: {
        color: theme.palette.common.blue,
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: theme.palette.common.hoverColor
        }
    },
}));

const AppBarHome = () => {
    const classes = useStyles();
    return (
        <AppBar position='sticky' elevation={0} className={classes.homeAppBarContainer}>
            <ToolBar style={{
                paddingLeft: '1em',
                paddingRight: '0.5em'
            }}>
                <Button
                    disableRipple
                    className={classes.buttonHome}
                >
                    <Typography variant='h5'
                        className={classes.textHome}
                    >
                        Home
                    </Typography>
                </Button>
                <CssTooltip title='Top tweets' enterDelay={300} enterNextDelay={300}>
                    <IconButton 
                        aria-label='top tweets'
                        disableRipple
                        className={classes.topTweetsIcon}
                    >
                        <StarHalfIcon />
                    </IconButton>
                </CssTooltip>
            </ToolBar>
        </AppBar>
    );
}
 
export default AppBarHome;