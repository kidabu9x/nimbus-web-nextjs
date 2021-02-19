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