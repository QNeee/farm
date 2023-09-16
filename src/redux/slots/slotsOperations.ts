import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserInfo, setToken } from '../auth/authOperations';
import { RootState } from '../store';
import { IPostSlotLine, ISlotDemo, ISlotStartGame } from '../../types';

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
export const getInstructionSlot = createAsyncThunk(
    'slots/instruction',
    async (id: string, { rejectWithValue }) => {
        try {
            const result = await axios.get(`instructions/slotsInstruction/${id}`);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const postStartGame = createAsyncThunk(
    'slots/startGame',
    async (data: ISlotStartGame | ISlotDemo[], { rejectWithValue, getState, dispatch }) => {
        try {
            if (Array.isArray(data)) {
                const result = await axios.post('demoSlots', data[0]);
                localStorage.setItem('demoBalance', (parseInt(localStorage.getItem('demoBalance') as string) + result.data.result).toString());
                return result;
            }
            const state: RootState = getState() as RootState;
            setToken(state?.auth?.accessToken as string);
            const result = await axios.post('slots', data);
            await dispatch(getUserInfo());
            return result;

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getSlotsById = createAsyncThunk(
    'slots/id',
    async (id: string | ISlotDemo[], { rejectWithValue, getState }) => {
        try {
            if (typeof id === 'object') {
                const result = await axios.get(`demoSlots/id/${id[0]['id']}?bet=${id[0]['bet']}&lines=${id[0]['lines']}`);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.get(`slots/id/${id}`);
                return result;
            }
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
            setToken(state?.auth?.accessToken as string);
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
            setToken(state?.auth?.accessToken as string);
            const result = await axios.post('slots/bet', data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);