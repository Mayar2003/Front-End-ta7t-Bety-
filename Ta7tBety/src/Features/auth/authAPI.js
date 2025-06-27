import axios from 'axios';
// import API from './axiosInstance';

const API = axios.create({
  baseURL: 'https://ta7t-bety-anb3dfg0e2dra6hp.germanywestcentral-01.azurewebsites.net/',
});

export const signup = (data) => API.post('api/v1/auth/signup', data);
export const login = (data) => API.post('api/v1/auth/login', data);


