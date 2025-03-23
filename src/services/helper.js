import axios from "axios";

export const BASE_URL = "fixfast-production-ad41.up.railway.app";

export const axiosService = axios.create({
    baseURL: BASE_URL,
});