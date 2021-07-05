import React, { useState } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Signup from '../ui/welcome/Signup';
import Signin from '../ui/welcome/Signin';
import twitterBackground from '../../assets/twitterBackground.png';
import twitterImage from '../../assets/twitterImage.svg';
import twitterLogo from '../../assets/twitterLogo.svg';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: theme.palette.common.background,
        margin: 0
    },
    rightContainer: {
        minWidth: 800,
        marginLeft: '2em',
        [theme.breakpoints.down('sm')]: {
            marginTop: '3em',
            marginBottom: '3em',
            marginLeft: 0,
            minWidth: 0
        }
    },
    logoItem: {
        width: '3em',
        marginBottom: '5em',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '3em'
        }
    },
    logoImg: {
        width: '100%',
    },
    leftContainer: {
        backgroundImage: `url(${twitterBackground})`,
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            height: '20em',
            margin: 0
        }
    },
    twitterImageItem: {
        maxWidth: '30em',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            height: '100%',
        }
    },
    twitterImg: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            width: 'auto'
        }
    },
    button: {
        ...theme.typography.button,
        height: 49,
        width: 379,
        [theme.breakpoints.down('sm')]: {
            width: 253,
        },
        [theme.breakpoints.down('xs')]: {
            width: '18em',
        }
    },

}));

const Welcome = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchedSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchedXS = useMediaQuery(theme.breakpoints.down('xs'));

    const { path, url } = useRouteMatch();
    console.log(path, url);

    const [openSignup, setOpenSignup] = useState(false);
    const [openSignin, setOpenSignin] = useState(false);

    return (
        <Grid container
            direction={ matchedSM ? 'column-reverse' : 'row' }
            alignItems={ matchedSM ? 'center' : undefined }
            className={ classes.mainContainer }
        >
            {/*//?---------------------Left Container---------------------------------  */ }
            <Grid item container md
                justify='center'
                alignItems='center'
                className={ classes.leftContainer }
            >
                <Grid item className={ classes.twitterImageItem }>
                    <img
                        src={ twitterImage }
                        alt='twitter'
                        className={ classes.twitterImg }
                    />
                </Grid>

            </Grid>
            {/*//?-----------------------Right Container----------------------------------  */ }
            <Grid item container md
                justify={ matchedSM ? 'center' : undefined }
                alignItems='center'
                className={ classes.rightContainer }
            >
                <Grid item container
                    alignItems={ matchedXS ? 'center' : undefined }
                    direction='column'
                    style={ { width: 'fit-content' } }
                >
                    <Grid item className={ classes.logoItem }>
                        <img
                            src={ twitterLogo }
                            alt='twitter logo'
                            className={ classes.logoImg }
                        />
                    </Grid>
                    <Grid item style={ { marginBottom: '2em' } }>
                        <Typography
                            variant={ matchedXS ? 'h2' : 'h1' }
                            align={ matchedXS ? 'center' : undefined }
                            style={ {
                                marginBottom: '0.8em',
                                lineHeight: 1,
                                fontSize: matchedXS ? '3rem' : undefined,
                                fontWeight: matchedXS ? 750 : undefined,
                            } }
                        >
                            What's{ matchedSM ? <br /> : null } happening?
                        </Typography>
                        <Typography
                            variant='h4'
                            align={ matchedXS ? 'center' : undefined }
                            style={ {
                                fontSize: matchedXS ? '1.5rem' : undefined,
                                fontWeight: matchedXS ? 500 : undefined,
                            } }
                        >
                            Join Twitter today.
                        </Typography>
                    </Grid>
                    <Grid item container
                        direction={ matchedXS ? 'column' : matchedSM ? 'row' : 'column' }
                    >
                        <Grid item>
                            <Button
                                variant='contained'
                                color='primary'
                                disableElevation
                                className={ classes.button }
                                style={ {
                                    marginBottom: matchedXS ? '1em' : matchedSM ? 0 : '1.5em',
                                    marginRight: matchedXS ? 0 : matchedSM ? '1em' : 0,
                                    color: 'white'
                                } }
                                onClick={ () => setOpenSignup(true) }
                            >
                                Signup
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='outlined'
                                color='primary'
                                className={ classes.button }
                                onClick={ () => setOpenSignin(true) }
                            >
                                Signin
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Signup
                openSignup={ openSignup }
                setOpenSignup={ setOpenSignup }
                setAuth={ props.setAuth }
            />
            <Signin
                openSignin={ openSignin }
                setOpenSignin={ setOpenSignin }
                setAuth={ props.setAuth }
            />
        </Grid>
    );
}

export default Welcome;