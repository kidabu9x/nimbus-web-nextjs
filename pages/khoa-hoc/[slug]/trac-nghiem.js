import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    ListItemIcon,
    LinearProgress
} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ShuffleIcon from '@material-ui/icons/Shuffle';

import {
    getCourse,
    getQuiz
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

const Quiz = ({host, course}) => {
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
    const canonical = host + "khoa-hoc/" + course.slug + "trac-nghiem" ;
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
    const [quiz, setQuiz] = useState(null);
    const [quizLoading, setQuizLoading] = useState(true);
    const [config, setConfig] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (focusQuizSlug) {
            const isAcceptableQuizSlug = Array.from(course.quizzes).some(quiz => quiz.slug === focusQuizSlug);
            if (isAcceptableQuizSlug) {
                setStep(2);
                setQuizSlug(focusQuizSlug);
            }
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
                            {quizLoading && <LinearProgress />}
                            {!quizLoading && quiz &&
                                <>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Khóa học {course.name}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Bài trắc nghiệm: {quiz.name}
                                    </Typography>
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
                                </>
                            }
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" disableElevation>Bắt đầu</Button>
                        </CardActions>
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
        console.log(course);
    } catch (error) {
        console.log(error);
    }
    
    return {
      props: {
        host,
          course
       }
    };
  }

export default Quiz;