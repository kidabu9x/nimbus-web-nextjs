import axios from "axios";
import config from "../configs/apis/config";
const PUBLIC_URL = config.domain.courseService;

const apiInstance = axios.create({
    baseURL: PUBLIC_URL,
    timeout: 20000
});

apiInstance.interceptors.request.use(request => {
    return request;
}, error => {
    Promise.reject(error)
});

export const getCourses = () => {
    let url = `/course`;
    return apiInstance.get(url);
}

export const getCourse = (slug) => {
    let url = `/course/${slug}`;
    return apiInstance.get(url);
}

export const getQuiz = ({
    course_slug,
    slug
}) => {
    let url = `/quiz/${slug}?course_slug=${course_slug}`;
    return apiInstance.get(url);
}

export const getQuestions = ({
    course_slug,
    quiz_slug
}) => {
    let url = `/question?course_slug=${course_slug}&quiz_slug=${quiz_slug}`;
    return apiInstance.get(url);
}