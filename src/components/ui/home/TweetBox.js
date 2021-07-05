import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import { deepPurple } from '@material-ui/core/colors';

const CssTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.tooltipBackground
    },
    popper: {
        marginTop: '-0.5em'
    }
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
    iconTweetContainer: {
        marginTop: '2em',
        marginBottom: '0.5em'
    },
    homeAvatar: {
        paddingLeft: '1em',
        paddingRight: '1em',
        paddingTop: '0.5em',
    },
    avatarButton: {
        padding: 0,

    },
    avatarSize: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500]
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

    const iconsTweetBox = [
        { icon: <ImageOutlinedIcon />, title: 'Media' },
        { icon: <GifOutlinedIcon />, title: 'Gif' },
        { icon: <PollOutlinedIcon />, title: 'Poll' },
        { icon: <SentimentSatisfiedOutlinedIcon/>, title: 'Emoji' },
        { icon: <ScheduleOutlinedIcon />, title: 'Schedule' },
    ]

    return (
        <Grid item container justify='flex-start' style={{
            borderBottom: `1px solid ${theme.palette.common.homeBorder}`,
        }}>
            <Grid item className={classes.homeAvatar}>
                <IconButton
                    disableRipple
                    className={classes.avatarButton}
                >
                    <Avatar className={classes.avatarSize} />
                </IconButton>
            </Grid>
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
                    <Grid xs item className={classes.iconsTweetBoxContainer}>
                        {iconsTweetBox.map((icon, index) => (
                            <CssTooltip 
                                key={icon.title+index} 
                                title={icon.title} enterDelay={300} 
                                enterNextDelay={300}
                            >
                                <IconButton
                                    aria-label={icon.title}
                                    key={icon.title+index}
                                    className={classes.tweetBoxIcon}
                                >
                                    {icon.icon}
                                </IconButton>
                            </CssTooltip>
                        ))}
                    </Grid>
                    <Grid xs item container justify='flex-end'>
                        <Button 
                            variant='contained' 
                            disableRipple
                            disableElevation
                            color='primary'
                            className={classes.tweetHomeButton}
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