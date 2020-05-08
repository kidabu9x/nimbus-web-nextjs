import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Author from "../Author";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    rootHighLight: {
        height: "100%"
    },
    actionArea: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    media: {
        height: "120px",
        width: "100%"
    },
    mediaHighLight: {
        height: "270px"
    },
    content: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 0
    },
    mainContent: {
        flex: 1,
        margin: theme.spacing(2)
    },
    author: {
        margin: theme.spacing(0, 2, 2, 2)
    }
}));

export default function CardRight({ blog, isHighLight = false, showDescription = false }) {
    const classes = useStyles();
    return (
        <>
            {blog && (
                <Link
                    href={`/${blog.slug}`}
                    underline="none"
                >
                    <Card
                        className={`${classes.root} ${isHighLight ? classes.rootHighLight : ''}`}
                    >
                        <CardActionArea className={classes.actionArea}>
                            {blog.thumbnail && (
                                <CardMedia
                                    className={`${classes.media} ${isHighLight ? classes.mediaHighLight : ''}`}
                                    image={blog.thumbnail}
                                    title={blog.title}
                                />
                            )}
                            <CardContent className={classes.content}>
                                <Box className={classes.mainContent}>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        {blog.title}
                                    </Typography>
                                    {showDescription && (
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {blog.description}
                                        </Typography>
                                    )}
                                </Box>
                                <Box className={classes.author}>
                                    <Author author={blog.authors[0]} />
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            )}
        </>
    );
}
