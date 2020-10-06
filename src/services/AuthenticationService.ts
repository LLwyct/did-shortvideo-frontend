import api from "./api";
import { AxiosRequestConfig } from 'axios';

interface ISignupFormData {
    phoneNumber: string,
    password: string,
}

interface ILoginFormData {
    phoneNumber: string;
    password: string;
}

interface IInformCollectData {
    name: string,
    identityNumber: string,
    email: string,
    age: number

}

function register(data: ISignupFormData, options?: AxiosRequestConfig) {
    return api().post("/register", data, options);
}

function login (data: ILoginFormData, options?: AxiosRequestConfig) {
    return api().post("/login", data, options);
}

function finishUserInformation(data: IInformCollectData, options?: AxiosRequestConfig) {
    return api().post("/finishuserinformation", data, options);
}

export default {
    register,
    login,
    finishUserInformation
}