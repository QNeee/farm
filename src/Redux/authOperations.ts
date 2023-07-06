import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../host';
axios.defaults.baseURL = HOST;
export const setToken = (token: string) => {
    if (token) {
        return axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    axios.defaults.headers.common.authorization = '';
};
export interface IAuthData {
    email: string;
    password: string;
}
export interface IResult {
    email?: string,
    password?: string,
    token?: string
}
export const register = createAsyncThunk(
    'auth/register',
    async (data: IAuthData, { rejectWithValue }) => {
        try {
            const result: IResult = await axios.post('auth/register', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const login = createAsyncThunk(
    'auth/login',
    async (data: IAuthData, { rejectWithValue }) => {
        try {
            const result = await axios.post('auth/login', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);