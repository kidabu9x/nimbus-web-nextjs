import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Author from "../Author";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "100%",
        minHeight: "270px"
    },
    actionArea: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    media: {
        height: "40%",
        width: "100%"
    },
    content: {
        height: "60%",
        display: "flex",
        flexDirection: "column"
    },
    mainContent: {
        flex: 1
    },
    author: {

    }
}));

export default function CardRight({ blog, showDescription = false }) {
    const classes = useStyles();
    return (
        <>
            {blog && (
                <Card className={classes.root}>
                    <CardActionArea className={classes.actionArea}>
                        <CardMedia
                            className={classes.media}
                            image={
                                blog.thumbnail
                                    ? blog.thumbnail
                                    : "https://react.semantic-ui.com/images/avatar/large/matthew.png"
                            }
                            title={blog.title}
                        />
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
            )}
        </>
    );
}
