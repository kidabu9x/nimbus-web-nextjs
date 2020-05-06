import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        marginLeft: theme.spacing(0.5),
        color: grey[500],
        lineHeight: theme.spacing(3) + 'px'
    }
}));

export default function Author({ author, avatarSize = 'small' }) {
    const classes = useStyles();
    const fullName = (() => {
        return author.first_name + ' ' + author.last_name;
    })();
    return (
        <>
            <Avatar className={classes[avatarSize]} alt={fullName} src={author.avatar} />
            <Typography className={classes.title}>{fullName}</Typography>
        </>
    )
}