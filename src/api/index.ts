import  axios, { createAxiosDefaults } from "axios";


const axiosConfig:createAxiosDefaults = {
    baseUrl:import.meta.VITE_API_BASE_URL
}

export const httpClient = axios.create(axiosConfig);

export const setAuthorizationHeader = (accessToken:string) => {
    httpClient.defaults.headers["Authorization"] = accessToken;
}