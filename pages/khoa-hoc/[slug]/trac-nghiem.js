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
    Box,
    Divider,
    FormControlLabel,
    Checkbox,
    Radio
} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import {
    getCourse,
    getQuiz,
    getQuestions
} from "../../../api/course";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { grey, yellow } from '@material-ui/core/colors';

const STEP = {
    CHOOSE_QUIZ: 1,
    CONFIRM_INFO: 2,
    TESTING: 3
}

const QUESTION_TYPE = {
    PAIRING_ANSWERS: "PAIRING_ANSWERS",
    MULTIPLE_CHOICE_MULTIPLE_ANSWERS: "MULTIPLE_CHOICE_MULTIPLE_ANSWERS",
    MULTIPLE_CHOICE_ONE_ANSWER: "MULTIPLE_CHOICE_ONE_ANSWER"
}

const useStyles = makeStyles({
    root: {
        width: 500,
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

const multipleAnswerStyles = makeStyles({
    root: {
        "&:hover": {
            background: grey[200],
            cursor: "pointer"
        }
    }
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
    const multipleAnswerClasses = multipleAnswerStyles();

    const router = useRouter();

    const focusQuizSlug = router.query.focus;

    const [step, setStep] = useState(STEP.CHOOSE_QUIZ);
    const [quizSlug, setQuizSlug] = useState(null);
    const [quizzes, setQuizzes] = useState([]);
    const [quiz, setQuiz] = useState(null);
    const [quizLoading, setQuizLoading] = useState(false);
    const [config, setConfig] = useState(null);

    const [fetchingQuestions, setFetchingQuestions] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [backupQuestions, setBackupQuestions] = useState([]);
    const [question, setQuestion] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [bookmarkIds, setBookmarkIds] = useState([]);

    useEffect(() => {
        if (focusQuizSlug) {
            const isAcceptableQuizSlug = Array.from(course.quizzes).some(quiz => quiz.slug === focusQuizSlug);
            if (isAcceptableQuizSlug) {
                setQuizSlug(focusQuizSlug);
                setStep(STEP.CONFIRM_INFO);
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
                const data = Array.from(response.data.data);
                setQuestions(data);
                setBackupQuestions(data);
                setFetchingQuestions(false);
                setTotalQuestions(data.length);
                if (data.length > 0) {
                    setStep(STEP.TESTING);
                    setQuestionIndex(0);
                    setQuestion(data[0]);
                }

            })
            .catch(error => {
                console.log(error.message);
                setFetchingQuestions(false);
            });
    }

    const goToQuiz = (quizSlug) => {
        setQuizSlug(quizSlug);
        setStep(STEP.CONFIRM_INFO);
    }

    const goToStep = (target) => {
        setStep(target);
    }

    const toggleBookmarkQuestion = (id) => {
        const index = bookmarkIds.indexOf(id);
        if (index === -1) {
            bookmarkIds.push(id);
        } else {
            bookmarkIds.splice(index, 1);
        }
        setBookmarkIds([...bookmarkIds]);
    }

    const nextQuestion = () => {
        const nextIndex = questionIndex + 1;
        if (nextIndex < totalQuestions) {
            setQuestion(questions[nextIndex]);
            setQuestionIndex(nextIndex);
        }
    }

    const backQuestion = () => {
        const backIndex = questionIndex - 1;
        if (backIndex > -1 && backIndex < totalQuestions) {
            setQuestion(questions[backIndex]);
            setQuestionIndex(backIndex);
        }
    }

    const handleCheckboxChange = (id) => {
        if (question.type !== QUESTION_TYPE.MULTIPLE_CHOICE_MULTIPLE_ANSWERS) {
            return;
        }

        let answers = Array.from(question.answers);
        const index = answers.findIndex(answer => answer.id === id);
        if (index === -1) {
            return;
        }
        answers[index].is_correct = !answers[index].is_correct;
        setQuestion({
            ...question,
            answers: [...answers]
        })
    }

    const handleRadioChange = (id) => {
        if (question.type !== QUESTION_TYPE.MULTIPLE_CHOICE_ONE_ANSWER) {
            return;
        }

        let answers = Array.from(question.answers);
        const index = answers.findIndex(answer => answer.id === id);
        if (index === -1) {
            return;
        }

        for (let i = 0; i < answers.length; i++) {
            if (i === index) {
                answers[i].is_correct = true;
            } else {
                answers[i].is_correct = false;
            }
        }

        setQuestion({
            ...question,
            answers: [...answers]
        })
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
                            {[STEP.CHOOSE_QUIZ, STEP.CONFIRM_INFO].includes(step) &&
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Khóa học {course.name}
                                </Typography>
                            }
                            {step === STEP.CHOOSE_QUIZ &&
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
                            {step === STEP.CONFIRM_INFO &&
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

                            {step === STEP.TESTING && question != null &&
                                <>
                                    <Box mb={1}>
                                        <Typography className={classes.title} color="textSecondary">
                                            Câu {questionIndex + 1}:
                                        </Typography>
                                    </Box>
                                    <Box mt={2} mb={3}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: question.content
                                            }}
                                        />
                                    </Box>
                                    <Divider />
                                    <Box my={2}>
                                        {question.type === QUESTION_TYPE.MULTIPLE_CHOICE_ONE_ANSWER &&
                                            Array.from(question.answers).map(answer => (
                                                <Box
                                                    key={answer.id}
                                                    p={1}
                                                    onClick={() => handleRadioChange(answer.id)}
                                                    className={multipleAnswerClasses.root}
                                                    borderRadius={4}
                                                >
                                                    <Grid
                                                        container
                                                        spacing={1}
                                                        alignItems="center"
                                                        justify="center"
                                                    >
                                                        <Grid item xs={1}>
                                                            <Radio
                                                                color="primary"
                                                                checked={answer.is_correct}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={11}>
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: answer.content
                                                                }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            ))
                                        }

                                        {question.type === QUESTION_TYPE.MULTIPLE_CHOICE_MULTIPLE_ANSWERS &&
                                            Array.from(question.answers).map(answer => (
                                                <Box
                                                    key={answer.id}
                                                    p={1}
                                                    onClick={() => handleCheckboxChange(answer.id)}
                                                    className={multipleAnswerClasses.root}
                                                    borderRadius={4}
                                                >
                                                    <Grid
                                                        container
                                                        alignItems="center"
                                                        justify="center"
                                                    >
                                                        <Grid item xs={1}>
                                                            <Checkbox
                                                                color="primary"
                                                                checked={answer.is_correct}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={11}>
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: answer.content
                                                                }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            ))
                                        }

                                        {question.type === QUESTION_TYPE.PAIRING_ANSWERS &&
                                            <>
                                                Drag
                                            </>
                                        }
                                    </Box>
                                    <Divider />
                                    <Box mt={2}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={4}>
                                                {questionIndex > 0 &&
                                                    <Button
                                                        onClick={backQuestion}
                                                        fullWidth
                                                        startIcon={<ArrowBackIosIcon />}
                                                    >
                                                        Câu trước
                                                    </Button>
                                                }
                                            </Grid>
                                            <Grid item xs={4}>
                                                {bookmarkIds.includes(question.id) ?
                                                    <Button
                                                        onClick={() => toggleBookmarkQuestion(question.id)}
                                                        fullWidth
                                                        startIcon={<BookmarkIcon style={{ color: yellow[700] }} />}
                                                    >
                                                        Bỏ đánh dấu
                                                    </Button>
                                                    :
                                                    <Button
                                                        onClick={() => toggleBookmarkQuestion(question.id)}
                                                        fullWidth
                                                        startIcon={<BookmarkBorderIcon />}
                                                    >
                                                        Đánh dấu
                                                    </Button>
                                                }
                                            </Grid>
                                            <Grid item xs={4}>
                                                {questionIndex < totalQuestions - 1 &&
                                                    <Button
                                                        onClick={nextQuestion}
                                                        fullWidth
                                                        endIcon={<ArrowForwardIosIcon />}
                                                    >
                                                        Câu tiếp
                                                    </Button>
                                                }
                                            </Grid>
                                        </Grid>
                                    </Box>
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