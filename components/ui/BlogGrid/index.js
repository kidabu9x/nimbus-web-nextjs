import BlogCard from "../BlogCard";
import {
    Typography,
    Container,
    Grid,
    Divider,
    Box,
    Link,
    makeStyles
} from "@material-ui/core";

const styles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4)
    }
}));

export default function Home({ title, href, blogs }) {
    const classes = styles();
    return (
        <Container className={classes.root} maxWidth="lg">
            {blogs && (
                <>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5" gutterBottom>
                            {title}
                        </Typography>
                        {href && (
                            <Link href={href}>
                                Xem thêm
                            </Link>
                        )}
                    </Box>

                    <Divider />
                    <Box marginTop={2} flexGrow={1}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <BlogCard
                                    blog={blogs[0]}
                                    showDescription
                                    isHighLight
                                />
                            </Grid>
                            <Grid container item xs={12} sm={6} spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <BlogCard blog={blogs[1]} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <BlogCard blog={blogs[2]} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <BlogCard blog={blogs[3]} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <BlogCard blog={blogs[4]} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            )}
        </Container>
    );
}
