import api from "./api";
import { AxiosRequestConfig } from 'axios';

function register (data: any, options?: AxiosRequestConfig) {
    return api().post("/register", data, options);
}

function login (data: any, options?: AxiosRequestConfig) {
    return api().post("/login", data, options);
}

export default {
    register,
    login
}