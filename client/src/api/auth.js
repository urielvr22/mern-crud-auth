import axios from './axios';

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = (user) => axios.get(`/verify`);

export const logoutRequest = () => axios.post(`/logout`);

/*
export const loginRequest = (user) => axios.post(`/login`, user, {headers: {
    'Access-Control-Allow-Origin': '*', 
    'Content-Type': 'application/json'
}});
*/