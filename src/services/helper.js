import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const axiosService = axios.create({
    baseURL: BASE_URL,
});