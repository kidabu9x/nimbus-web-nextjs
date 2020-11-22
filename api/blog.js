import axios from "axios";
import config from "../configs/apis/config";
const PUBLIC_URL = config.domain.blogService + "/v1";

const apiInstance = axios.create({
    baseURL: PUBLIC_URL,
    timeout: 20000
});

apiInstance.interceptors.request.use(request => {

    return request;
}, error => {
    Promise.reject(error)
});

export const getCategories = () => {
    let url = `/categories`;
    return apiInstance.get(url);
}

export const getFeatures = () => {
    let url = `/features`;
    return apiInstance.get(url);
}

export const getSlug = (slug) => {
    let url = `/${slug}`;
    return apiInstance.get(url);
}

export const getTag = (slug) => {
    let url = `/tag/${slug}`;
    return apiInstance.get(url);
}

export const searchByQuery = (query) => {
    let url = `/search`;
    return apiInstance.get(url, {
        params: {
            query
        },
    });
}