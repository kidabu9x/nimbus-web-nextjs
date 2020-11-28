import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCourses } from "../../../api/blog";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Link,
    Divider,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: "block",
        margin: theme.spacing(2, 0)
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
}));

const HachiumCourseComponent = () => {
    const router = useRouter();
    const query = router.query;
    const slug = query.slug;

    const [courses, setCourses] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        let mounted = true;
        getCourses({ slug })
            .then(response => {
                if (mounted) {
                    setCourses(response.data.data);
                }
            })
            .catch(error => {
                console.log(error);
            })

        return () => mounted = false;
    }, []);

    if (courses.length == 0) {
        return <></>;
    }

    return (
        <>
            <Typography variant="h5" gutterBottom>Khóa học liên quan:</Typography>
            {courses.map(course => (
                <Link
                    className={classes.root}
                    key={course.url}
                    href={course.url}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={course.image}
                            title={course.title}
                        />
                        <CardContent>
                            <Typography variant="body1">
                                {course.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            ))}
            <Divider />
        </>
    )
}

export default HachiumCourseComponent;