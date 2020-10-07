import axios, { AxiosInstance } from "axios";

export default function (): AxiosInstance {
    return axios.create({
        baseURL: "http://fakeapi/api/",
        headers: {
            "Content-type": "application/json"
        }
    })
}