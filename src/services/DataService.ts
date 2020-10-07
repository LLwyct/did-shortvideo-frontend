import api from "./api";
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IDidData {
    name: string,
    age: string,
    identityNumber: string,
    publicKey: string,
    antiAddiction: boolean,
    youthMode: boolean
}

function getDidCardInfo(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return api().get("data/didcardinfo", options);
}

function getRecentLog (options?: AxiosRequestConfig) {
    return api().get("data/recentLog", options);
}

function getAllLog(options?: AxiosRequestConfig) {
    return api().get("data/alllog", options);
}

function getvideoinfo(options?: AxiosRequestConfig) {
    return api().get("data/videoinfo", options);
}

export default {
    getDidCardInfo,
    getRecentLog,
    getAllLog,
    getvideoinfo
}