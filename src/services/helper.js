import axios from "axios";

export const BASE_URL = "https://fixfast-nine.vercel.app";

export const axiosService = axios.create({
    baseURL: BASE_URL,
});