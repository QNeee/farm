
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';
import { setToken } from './authOperations';
export const postCubicStartGame = createAsyncThunk(
    'cubics/startGame',
    async (data: object, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.post('cubics', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsStart = createAsyncThunk(
    'cubics/',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.get('cubics/');
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsStartGame = createAsyncThunk(
    'cubics/start',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.get('cubics/start');
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsTable = createAsyncThunk(
    'cubics/table',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.get('cubics/table');
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const deleteThrowGame = createAsyncThunk(
    'cubics/delete',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.delete('cubics/');
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);