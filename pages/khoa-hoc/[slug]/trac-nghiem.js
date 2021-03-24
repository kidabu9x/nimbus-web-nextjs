import { makeStyles, withStyles } from '@material-ui/core/styles';
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
    Checkbox,
    Radio,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent
} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import ReplayIcon from '@material-ui/icons/Replay';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { PieChart } from 'react-minimal-pie-chart';

import {
    getCourse,
    getQuiz,
    getQuestions,
    submitQuestions
} from "../../../api/course";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { grey, yellow, red, blue, green, blueGrey } from '@material-ui/core/colors';
import React from 'react';

const STEP = {
    CHOOSE_QUIZ: 1,
    CONFIRM_INFO: 2,
    TESTING: 3,
    SHOW_RESULT: 4
}

const QUESTION_TYPE = {
    PAIRING_ANSWERS: "PAIRING_ANSWERS",
    MULTIPLE_CHOICE_MULTIPLE_ANSWERS: "MULTIPLE_CHOICE_MULTIPLE_ANSWERS",
    MULTIPLE_CHOICE_ONE_ANSWER: "MULTIPLE_CHOICE_ONE_ANSWER"
}

const useStyles = makeStyles({
    root: {
        width: 700,
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
    questionContent: {
        height: 500,
        overflowY: "auto",
        overflowX: "hidden"
    },
    resultContent: {
        // heigh: 500,
    },
    resultTable: {
        height: 500,
        overflowY: "auto"
    }
});

const multipleAnswerStyles = makeStyles({
    root: {
        "&:hover": {
            background: grey[200],
            cursor: "pointer"
        }
    },
    disable: {
        "&:hover": {
            background: "none",
            cursor: "default"
        }
    }
});

const pairingAnswerStyles = makeStyles(theme => ({
    root: {
        border: `1px solid ${grey[300]}`,
        borderRadius: 2,
        padding: theme.spacing(1),
        minHeight: 100,
        marginBottom: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    pairing: {
        transform: "none !important",
        minHeight: 100
    },
    correct: {
        borderColor: green[500]
    },
    inCorrect: {
        borderColor: red[500]
    }
}));

const getDragStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    ...(isDragging && {
        background: "rgb(235,235,235)"
    })
});

const getRenderCloneItem = (items, className) => (provided, snapshot, rubric) => {
    const item = items[rubric.source.index];
    return (
        <React.Fragment>
            <div
                className={className}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={provided.draggableProps.style}
            >
                {item.content ? item.content : "-"}
            </div>
        </React.Fragment>
    );
};

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const BlueRadio = withStyles({
    root: {
        color: blueGrey[400],
        '&$checked': {
            color: blueGrey[500],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const BlueCheckbox = withStyles({
    root: {
        color: blueGrey[400],
        '&$checked': {
            color: blueGrey[500],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const RedCheckbox = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

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

    let title = "Khóa học " + course.name;
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
    const pairingAnswerClasses = pairingAnswerStyles();

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
    const [showMenu, setShowMenu] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [showResultModal, setShowResultModal] = useState(false);

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
                    const config = data.config;
                    delete data.config;

                    setConfig(config);
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
                setBackupQuestions(JSON.parse(JSON.stringify(data)));
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
            const isReset = config ?
                config.reset_question_on_back != null ?
                    config.reset_question_on_back : false
                :
                false;

            if (!isSubmitted && isReset) {
                const question = JSON.parse(JSON.stringify(backupQuestions[backIndex]));
                questions[backIndex] = question;
                setQuestions(questions);
                setQuestion(question);
            } else {
                setQuestion(questions[backIndex]);
            }
            setQuestionIndex(backIndex);
        }
    }

    const goToQuestion = (index) => {
        setQuestionIndex(index);
        setQuestion(questions[index]);
        setStep(STEP.TESTING);
    }

    const handleCheckboxChange = (id) => {
        if (isSubmitted) {
            return;
        }
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
        if (isSubmitted) {
            return;
        }
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

    const onDragEnd = result => {
        if (question.type !== QUESTION_TYPE.PAIRING_ANSWERS) {
            return;
        }
        const { source, destination } = result;
        if (source == null || destination == null) {
            return;
        }

        const sourceIndex = source.index;
        const destinationIndex = destination.index;

        if (sourceIndex == null || destinationIndex == null) {
            return;
        }

        const tempAnswers = Array.from(question.temp_pairing_answers);
        const answers = Array.from(question.answers);

        if (sourceIndex >= tempAnswers.length || destinationIndex >= answers.length) {
            return;
        }

        const tempAnswer = tempAnswers[sourceIndex];
        const existIndex = answers.findIndex(a => a.id === tempAnswer.id);
        if (existIndex > -1) {
            answers[existIndex] = {
                id: null
            };
        }
        answers[destinationIndex] = tempAnswer;

        question.answers = answers;
        setQuestion(question);
    }

    const goToMenu = () => {
        if (step !== STEP.TESTING) {
            return;
        }
        setShowMenu(true);
        setStep(STEP.SHOW_RESULT);
    }

    const onSubmit = () => {
        if (step !== STEP.SHOW_RESULT) {
            return;
        }

        const body = questions.map(q => {
            const answers = Array.from(q.answers);

            const answerRequests = answers.map(answer => {
                return {
                    id: answer.id,
                    is_correct: answer.is_correct
                }
            });

            const questionRequest = {
                id: q.id,
                answers: answerRequests
            };

            if (q.type === QUESTION_TYPE.PAIRING_ANSWERS) {
                questionRequest.pairing_answers = Array.from(q.pairing_answers).map(answer => {
                    return {
                        id: answer.id
                    }
                });
            }

            return questionRequest;
        });


        setIsSubmitting(true);
        submitQuestions(body)
            .then(response => {
                const data = Array.from(response.data.data);
                let count = 0;
                for (const q of data) {
                    const index = questions.findIndex(question => question.id === q.id);
                    if (index === -1) {
                        continue;
                    }

                    const question = questions[index];
                    const answers = Array.from(question.answers);
                    const resAnswers = Array.from(q.answers);

                    for (const a of resAnswers) {
                        const aIndex = answers.findIndex(answer => answer.id === a.id);
                        if (aIndex === -1) {
                            continue;
                        }

                        const answer = answers[aIndex];
                        answer.is_match = a.is_match;
                        answer.is_correct = a.is_correct;
                    }

                    question.is_match = q.is_match;
                    question.answers = answers;

                    if (question.is_match) {
                        count++;
                    }
                }
                setCorrectCount(count);
                setQuestions(questions);
                setIsSubmitting(false);
                setIsSubmitted(true);
                setShowResultModal(true);
            })
            .catch(e => {
                setIsSubmitting(true);
            });
    }

    const closeResultModal = () => {
        setShowResultModal(false);
    }

    const goToSelectQuiz = () => {
        setStep(STEP.CHOOSE_QUIZ);
        setQuizSlug(null);
        setQuiz(null);
        setQuizLoading(false);
        setConfig(null);
        setFetchingQuestions(false);
        setQuestions([]);
        setBackupQuestions([]);
        setQuestion(null);
        setQuestionIndex(0);
        setTotalQuestions(0);
        setBookmarkIds([]);
        setShowMenu(false);
        setIsSubmitted(false);
        setIsSubmitting(false);
        setCorrectCount(0);
        setShowResultModal(false);
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
                            {(quizLoading || fetchingQuestions || isSubmitting) && <LinearProgress />}
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
                                    <Box my={2} className={classes.questionContent}>
                                        {question.type === QUESTION_TYPE.MULTIPLE_CHOICE_ONE_ANSWER &&
                                            Array.from(question.answers).map(answer => (
                                                <Box
                                                    key={answer.id}
                                                    p={1}
                                                    onClick={() => handleRadioChange(answer.id)}
                                                    className={`${multipleAnswerClasses.root} ${isSubmitted ? multipleAnswerClasses.disable : ''}`}
                                                    borderRadius={4}
                                                >
                                                    <Grid
                                                        container
                                                        spacing={1}
                                                        alignItems="center"
                                                        justify="center"
                                                    >
                                                        <Grid item xs={1}>
                                                            {!isSubmitted ?
                                                                <BlueRadio
                                                                    checked={answer.is_correct}
                                                                />
                                                                :
                                                                <>
                                                                    {answer.is_match && !answer.is_correct &&
                                                                        <BlueRadio
                                                                            checked={answer.is_correct}
                                                                        />
                                                                    }
                                                                    {!answer.is_match && answer.is_correct &&
                                                                        <GreenRadio checked={answer.is_correct} />
                                                                    }

                                                                    {!answer.is_match && !answer.is_correct &&
                                                                        <RedRadio checked={!answer.is_correct} />
                                                                    }
                                                                    {answer.is_match && answer.is_correct &&
                                                                        <GreenRadio
                                                                            checked={answer.is_correct}
                                                                        />
                                                                    }
                                                                </>
                                                            }

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
                                                    className={`${multipleAnswerClasses.root} ${isSubmitted ? multipleAnswerClasses.disable : ''}`}
                                                    borderRadius={4}
                                                >
                                                    <Grid
                                                        container
                                                        alignItems="center"
                                                        justify="center"
                                                    >
                                                        <Grid item xs={1}>
                                                            {!isSubmitted ?
                                                                <BlueCheckbox
                                                                    checked={answer.is_correct}
                                                                />
                                                                :
                                                                <>
                                                                    {answer.is_match && !answer.is_correct &&
                                                                        <BlueCheckbox
                                                                            checked={answer.is_correct}
                                                                        />
                                                                    }
                                                                    {!answer.is_match && answer.is_correct &&
                                                                        <GreenCheckbox checked={answer.is_correct} />
                                                                    }

                                                                    {!answer.is_match && !answer.is_correct &&
                                                                        <RedCheckbox checked={!answer.is_correct} />
                                                                    }
                                                                    {answer.is_match && answer.is_correct &&
                                                                        <GreenCheckbox
                                                                            checked={answer.is_correct}
                                                                        />
                                                                    }
                                                                </>
                                                            }
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
                                            <DragDropContext onDragEnd={onDragEnd}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}>
                                                        <Droppable droppableId="TEMP_PAIRING_ANSWERS" isDropDisabled={true} renderClone={getRenderCloneItem(question.temp_pairing_answers, pairingAnswerClasses.root)}>
                                                            {(provided, snapshot) => (
                                                                <div ref={provided.innerRef}>
                                                                    {Array.from(question.temp_pairing_answers).map((temp, index) => {
                                                                        const id = `drag-${index}`;
                                                                        const content = temp.content ? temp.content : "-";
                                                                        const shouldRenderClone = id === snapshot.draggingFromThisWith;
                                                                        return (
                                                                            <React.Fragment key={id}>
                                                                                {shouldRenderClone ? (
                                                                                    <div
                                                                                        className={pairingAnswerClasses.root}
                                                                                    >
                                                                                        {content}
                                                                                    </div>
                                                                                ) : (
                                                                                    <Draggable index={index} draggableId={id} isDragDisabled={isSubmitted}>
                                                                                        {(provided, snapshot) => (
                                                                                            <div
                                                                                                className={pairingAnswerClasses.root}
                                                                                                ref={provided.innerRef}
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                                style={getDragStyle(
                                                                                                    snapshot.isDragging,
                                                                                                    provided.draggableProps.style
                                                                                                )}
                                                                                            >
                                                                                                {content}
                                                                                            </div>
                                                                                        )}
                                                                                    </Draggable>
                                                                                )}
                                                                            </React.Fragment>
                                                                        )

                                                                    })}
                                                                    {provided.placeholder}
                                                                </div>
                                                            )}
                                                        </Droppable>
                                                    </Grid>

                                                    <Grid item xs={8}>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={6}>
                                                                <Droppable droppableId="ANSWERS">
                                                                    {(provided, snapshot) => (
                                                                        <div ref={provided.innerRef}>
                                                                            {Array.from(question.answers).map((answer, index) => {
                                                                                const id = `drop-${index}`;
                                                                                const content = answer.content ? answer.content : "-";
                                                                                const isMatch = answer.is_match;
                                                                                return (
                                                                                    <Draggable key={id} index={index} draggableId={id} isDragDisabled>
                                                                                        {(provided, snapshot) => (
                                                                                            <div
                                                                                                className={`${pairingAnswerClasses.root} ${pairingAnswerClasses.pairing} ${isSubmitted ? (isMatch ? pairingAnswerClasses.correct : pairingAnswerClasses.inCorrect) : ''}`}
                                                                                                ref={provided.innerRef}
                                                                                                {...provided.draggableProps}
                                                                                                {...provided.dragHandleProps}
                                                                                            >
                                                                                                {content}
                                                                                            </div>
                                                                                        )}
                                                                                    </Draggable>
                                                                                )
                                                                            })}
                                                                            {provided.placeholder}
                                                                        </div>
                                                                    )}
                                                                </Droppable>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                {Array.from(question.pairing_answers).map(answer => (
                                                                    <div
                                                                        className={`${pairingAnswerClasses.root} ${pairingAnswerClasses.pairing}`}
                                                                        key={answer.id}
                                                                    >
                                                                        {answer.content ? answer.content : "-"}
                                                                    </div>
                                                                ))}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </DragDropContext>
                                        }

                                        {isSubmitted && question.description &&
                                            <Box my={1}>
                                                <Typography variant="subtitle2">
                                                    {question.description}
                                                </Typography>
                                            </Box>
                                        }
                                    </Box>
                                    <Divider />
                                    <Box mt={2}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={4}>
                                                {questionIndex > 0 &&
                                                    <Button
                                                        size="large"
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
                                                        size="large"
                                                        onClick={() => toggleBookmarkQuestion(question.id)}
                                                        fullWidth
                                                        startIcon={<BookmarkIcon style={{ color: yellow[700] }} />}
                                                    >
                                                        Bỏ đánh dấu
                                                    </Button>
                                                    :
                                                    <Button
                                                        size="large"
                                                        onClick={() => toggleBookmarkQuestion(question.id)}
                                                        fullWidth
                                                        startIcon={<BookmarkBorderIcon />}
                                                    >
                                                        Đánh dấu
                                                    </Button>
                                                }
                                            </Grid>
                                            <Grid item xs={4}>
                                                {questionIndex < totalQuestions - 1 && !showMenu &&
                                                    <Button
                                                        size="large"
                                                        onClick={nextQuestion}
                                                        fullWidth
                                                        endIcon={<ArrowForwardIosIcon />}
                                                    >
                                                        Câu tiếp
                                                    </Button>
                                                }
                                                {((questionIndex === totalQuestions - 1) || showMenu) &&
                                                    <Button
                                                        size="large"
                                                        onClick={goToMenu}
                                                        fullWidth
                                                        color="primary"
                                                        endIcon={<ArrowForwardIosIcon />}
                                                        variant="contained"
                                                        disableElevation
                                                    >
                                                        Trình đơn
                                                    </Button>
                                                }
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </>
                            }


                            {step === STEP.SHOW_RESULT &&
                                <Box className={classes.resultContent}>
                                    <Box my={2}>
                                        <Grid container>
                                            <Grid item xs={4}>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography color="textSecondary" align="center">
                                                    Đánh dấu
                                            </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography color="textSecondary" align="center">
                                                    Kết quả
                                            </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Box className={classes.resultTable}>
                                        {questions.map((q, index) => (
                                            <Box key={q.id} py={2} borderTop={1} borderColor="grey.100">
                                                <Grid container>
                                                    <Grid item xs={4}>
                                                        <Button
                                                            size="medium"
                                                            style={{ 'textTransform': 'none' }}
                                                            onClick={() => goToQuestion(index)}
                                                            disabled={isSubmitting}
                                                        >
                                                            <div
                                                                style={{ textAlign: "left" }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: q.content
                                                                }}
                                                            />
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {bookmarkIds.includes(q.id) &&
                                                            <Typography align="center">
                                                                <IconButton
                                                                    onClick={() => goToQuestion(index)} size="small"
                                                                    disabled={isSubmitting}
                                                                >
                                                                    <BookmarkIcon style={{ color: yellow[700] }} />
                                                                </IconButton>
                                                            </Typography>

                                                        }
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {isSubmitted &&
                                                            <Typography align="center">
                                                                {q.is_match ?
                                                                    <CheckCircleIcon color="primary" /> : <ErrorIcon style={{ color: red[500] }} />
                                                                }
                                                            </Typography>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        ))}
                                    </Box>

                                    <Divider />
                                    <Box mt={2}>
                                        {!isSubmitted ?
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color="primary"
                                                fullWidth
                                                disabled={isSubmitting}
                                                disableElevation
                                                onClick={onSubmit}
                                            >
                                                Chấm điểm
                                            </Button>
                                            :
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Typography align="center" variant="h6">
                                                        Kết quả: {correctCount}/{totalQuestions}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button
                                                        variant="contained"
                                                        size="large"
                                                        color="primary"
                                                        fullWidth
                                                        disableElevation
                                                        endIcon={<ReplayIcon />}
                                                        onClick={goToSelectQuiz}
                                                    >
                                                        Làm lại
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        }
                                    </Box>
                                </Box>
                            }

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {isSubmitted && step === STEP.SHOW_RESULT &&
                <Dialog onClose={closeResultModal} aria-labelledby="customized-dialog-title" open={showResultModal}>
                    <DialogTitle id="customized-dialog-title" onClose={closeResultModal}>
                        Kết quả
                    </DialogTitle>
                    <DialogContent dividers>
                        <Box p={4}>
                            <Box mb={4}>
                                <Typography variant="body1">
                                    Bạn đã trả lời đúng {correctCount} trong tổng số {totalQuestions} câu hỏi
                                </Typography>
                            </Box>
                            <PieChart
                                data={[{ value: (correctCount / totalQuestions) * 100, color: green[500] }]}
                                totalValue={100}
                                lineWidth={20}
                                label={(_) => `${(correctCount / totalQuestions) * 100}%`}
                                rounded
                                labelStyle={{
                                    fontSize: '25px',
                                    fontFamily: 'Roboto',
                                    fill: green[500]
                                }}
                                labelPosition={0}
                            />
                        </Box>

                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={closeResultModal}>
                            Đóng
                        </Button>
                        <Button autoFocus onClick={goToSelectQuiz} color="primary">
                            Làm lại
                        </Button>
                    </DialogActions>
                </Dialog>
            }
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