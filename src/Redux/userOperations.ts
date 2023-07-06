
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';
import { setToken } from './authOperations';
import { IUserBalance } from '../types';


export const getUserInfo = createAsyncThunk(
    'user',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.token as string);
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
            setToken(state?.chat?.token as string);
            const result = await axios.post('users/balance', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);