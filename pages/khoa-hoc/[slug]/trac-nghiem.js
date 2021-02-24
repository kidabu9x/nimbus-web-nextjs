import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Button,
    IconButton,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    ListItemIcon,
    LinearProgress,
    Box
} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {
    getCourse,
    getQuiz,
    getQuestions
} from "../../../api/course";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 400,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Quiz = ({ host, course }) => {
    if (!course) {
        return (
            <div>
                <Head>
                    <title>Khóa học không tồn tại</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <p>Khóa học không tồn tại</p>
            </div>
        )
    }

    const title = "Khóa học " + course.name;
    const description = title;
    const canonical = host + "khoa-hoc/" + course.slug + "trac-nghiem";
    const image = "https://res.cloudinary.com/nimbus-education/image/upload/v1588748885/blogs/uat/logo-white-bg.png";

    const openGraph = {
        url: canonical,
        title: title,
        description: description,
        locale: "vi_VN",
        type: "article",
        images: [
            {
                url: image
            }
        ],
        site_name: 'Nimbus Study Hub',
    };

    const twitter = {
        handle: '@handle',
        site: '@site'
    }

    const classes = useStyles();

    const router = useRouter();

    const focusQuizSlug = router.query.focus;

    const [step, setStep] = useState(1);
    const [quizSlug, setQuizSlug] = useState(null);
    const [quizzes, setQuizzes] = useState([]);
    const [quiz, setQuiz] = useState(null);
    const [quizLoading, setQuizLoading] = useState(false);
    const [config, setConfig] = useState(null);

    const [fetchingQuestions, setFetchingQuestions] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [backupQuestions, setBackupQuestions] = useState([]);

    useEffect(() => {
        if (focusQuizSlug) {
            const isAcceptableQuizSlug = Array.from(course.quizzes).some(quiz => quiz.slug === focusQuizSlug);
            if (isAcceptableQuizSlug) {
                setQuizSlug(focusQuizSlug);
                setStep(2);
            }
        } else {
            setQuizzes(Array.from(course.quizzes));
        }
    }, [focusQuizSlug]);

    useEffect(() => {
        if (step === 2) {
            setQuizLoading(true);
            getQuiz({
                course_slug: course.slug,
                slug: quizSlug
            })
                .then(response => {
                    const data = response.data.data;
                    setConfig(data.config);
                    delete data.config;
                    setQuiz(data);
                    setQuizLoading(false);
                })
                .catch(error => {
                    setQuizLoading(false);
                })
        }
    }, [step]);

    const fetchQuestions = () => {
        setFetchingQuestions(true);
        getQuestions({
            course_slug: course.slug,
            quiz_slug: quiz.slug
        })
            .then(response => {
                const data = response.data.data;
                setQuestions(data);
                setBackupQuestions(data);
                setFetchingQuestions(false);
            })
            .catch(error => {
                console.log(error.message);
                setFetchingQuestions(false);
            });
    }

    const goToQuiz = (quizSlug) => {
        setQuizSlug(quizSlug);
        setStep(2);
    }

    const goToStep = (target) => {
        console.log(target);
        setStep(target);
    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={canonical}
                openGraph={openGraph}
                twitter={twitter}
            />
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={6}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            {(quizLoading || fetchingQuestions) && <LinearProgress />}
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Khóa học {course.name}
                            </Typography>
                            {step === 1 &&
                                <>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Chọn bài trắc nghiệm
                                    </Typography>
                                    <Box mt={2}>
                                        <Grid container spacing={2}>
                                            {quizzes.map((quizItem) =>
                                                <Grid key={quizItem.slug} item>
                                                    <Button variant="outlined" size="large" color="primary" onClick={() => goToQuiz(quizItem.slug)}>
                                                        {quizItem.name}
                                                    </Button>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </Box>
                                </>
                            }
                            {step === 2 &&
                                <>
                                    {!quizLoading && quiz &&
                                        <>
                                            <Box display="flex" alignItems="center">
                                                <IconButton onClick={() => goToStep(1)}>
                                                    <ArrowBackIosIcon />
                                                </IconButton>
                                                <Typography variant="h5" component="h2">
                                                    Bài trắc nghiệm: {quiz.name}
                                                </Typography>
                                            </Box>

                                            <List>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <AccessTimeIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        Thời lượng
                                                    </ListItemText>
                                                    <ListItemSecondaryAction>
                                                        {config.duration} phút
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <LiveHelpIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        Số lượng câu hỏi
                                                    </ListItemText>
                                                    <ListItemSecondaryAction>
                                                        {Math.min(quiz.total_questions, config.limit_number_of_questions)} câu
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <ShuffleIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        Trộn câu hỏi
                                                    </ListItemText>
                                                    <ListItemSecondaryAction>
                                                        {config.shuffle_questions ? "Có" : "Không"}
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                            </List>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                disableElevation
                                                size="large"
                                                fullWidth
                                                disabled={fetchingQuestions}
                                                onClick={fetchQuestions}
                                            >
                                                Bắt đầu
                                            </Button>
                                        </>
                                    }
                                </>
                            }

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export async function getServerSideProps({ req, params }) {
    const host = "https://" + req.headers.host + "/";
    const {
        slug
    } = params;

    let course = null;

    try {
        const response = await getCourse(slug);
        course = response.data.data;
    } catch (error) {
        console.log(error.message);
    }

    return {
        props: {
            host,
            course
        }
    };
}

export default Quiz;