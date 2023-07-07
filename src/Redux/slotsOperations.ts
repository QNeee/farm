import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostSlotLine } from '../types';
import { RootState } from './store';
import { setToken } from './authOperations';

export const getSlots = createAsyncThunk(
    'slots',
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get('slots');
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const postStartGame = createAsyncThunk(
    'slots/postbet',
    async (data: { id: string }, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.post('slots', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getSlotsById = createAsyncThunk(
    'slots/id',
    async (id: string, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.get(`slots/id/${id}`);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const postSlotLine = createAsyncThunk(
    'slots/line',
    async (data: IPostSlotLine, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.post('slots/line', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const postBetSlot = createAsyncThunk(
    'slots/bet',
    async (data: IPostSlotLine, { rejectWithValue, getState }) => {
        try {
            const state: RootState = getState() as RootState;
            setToken(state?.chat?.accessToken as string);
            const result = await axios.post('slots/bet', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);