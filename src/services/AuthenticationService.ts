import api from "./api";
import { AxiosRequestConfig } from 'axios';

interface ILoginFormData {
    email: string;
    password: string;
}


function register (data: any, options?: AxiosRequestConfig) {
    return api().post("/register", data, options);
}

function login (data: ILoginFormData, options?: AxiosRequestConfig) {
    return api().post("/login", data, options);
}

export default {
    register,
    login
}