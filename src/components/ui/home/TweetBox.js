import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase'

import TweetBoxIcons from './TweetBoxIcons';    
import TweetBoxAvatar from './TweetBoxAvatar';


const useStyles = makeStyles((theme) => ({
    iconTweetContainer: {
        marginTop: '2em',
        marginBottom: '0.5em'
    },
    
    inputTweetItem: {
        maxWidth: '32em'
    },
    inputTweet: {
        marginTop: '0.8em',
        fontSize: '1.2rem',
        fontFamily: 'Raleway',
        fontWeight: 500
    },
    iconsTweetBoxContainer: {
        marginLeft: '-1em'
    },
    tweetBoxIcon: {
        color: theme.palette.common.blue,
        '&:hover': {
            backgroundColor: theme.palette.common.hoverColor
        }
    },
    tweetHomeButton: {
        ...theme.typography.button,
        color: 'white',
        height: '2.5em',
        marginRight: '1em'
    }
}));

const TweetBox = () => {
    const classes = useStyles();
    const theme = useTheme();
    

    return (
        <Grid item container justify='flex-start' style={{
            borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
        }}>
            <TweetBoxAvatar />
            <Grid item xs container direction='column'>
                <Grid item className={classes.inputTweetItem}>
                    <InputBase
                        multiline
                        placeholder="What's happening?"
                        className={classes.inputTweet}
                        fullWidth
                    />
                </Grid>
                <Grid item container 
                    justify='space-between'
                    className={classes.iconTweetContainer}
                >
                    <TweetBoxIcons />
                    <Grid xs item container justify='flex-end'>
                        <Button 
                            variant='contained' 
                            disableRipple
                            disableElevation
                            color='primary'
                            className={ classes.tweetHomeButton }
                            
                        >
                            Tweet
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default TweetBox;