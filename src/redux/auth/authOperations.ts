import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { HOST } from '../../host';
import { IUserBalance } from '../../types';
import { RootState } from '../store';

axios.defaults.baseURL = HOST;

export const setToken = (token: string) => {
    if (token) {
        return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
    }
    axios.defaults.headers.common.authorization = '';
};
export interface IAuthData {
    email: string;
    password: string;
}
export interface IResult {
    email?: string;
    password?: string;
    token?: string;
}
export interface IRefreshResult {
    newAccessToken: string;
    newSid: string;
    newRefreshToken: string;
}
export const register = createAsyncThunk(
    'auth/register',
    async (data: IAuthData, { rejectWithValue, dispatch }) => {
        try {
            const result = await axios.post('auth/register', data);
            if (result.data._id) {
                dispatch(login(data));
            }
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
            setToken(state.auth.accessToken as string);
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
            setToken(state?.auth.refreshToken as string);
            const sid = state?.auth.sid as string;
            const result = await axios.post('auth/refresh', { sid });
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getUserInfo = createAsyncThunk(
    'user',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.auth.accessToken as string);
            const result = await axios.get('users/');
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const postUserBalance = createAsyncThunk(
    'user/balance',
    async (data: IUserBalance, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.auth.accessToken as string);
            const result = await axios.post('users/balance', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);