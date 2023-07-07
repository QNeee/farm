import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../host';
import { RootState } from './store';
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
export interface IRefreshResult {
    newAccessToken: string,
    newSid: string,
    newRefreshToken: string
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
export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            await axios.get('auth/logout');
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.refreshToken as string);
            const sid = state?.chat?.sid as string;
            const result = await axios.post('auth/refresh', { sid });
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);