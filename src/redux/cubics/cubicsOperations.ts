
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { setToken } from '../auth/authOperations';
import { ICubicStartGame } from '../../types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export const postCubicStartGame = createAsyncThunk(
    'cubics/startGame',
    async (data: object | ICubicStartGame[], { rejectWithValue, getState }) => {
        try {
            if (Array.isArray(data)) {
                const result = await axios.post(`demoSlots/cubics/${data[1]}`, data[0]);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.post('cubics', data);
                return result;
            }

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsStart = createAsyncThunk(
    'cubics/',
    async (demo: string, { rejectWithValue, getState }) => {
        try {
            if (demo) {
                const result = await axios.get(`demoSlots/cubics/${demo}`);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.get('cubics/');
                return result;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsStartGame = createAsyncThunk(
    'cubics/start',
    async (demo: string, { rejectWithValue, getState }) => {
        try {
            if (demo) {
                const result = await axios.get(`demoSlots/start/${demo}`);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.get('cubics/start');
                return result;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsTable = createAsyncThunk(
    'cubics/table',
    async (demo: string, { rejectWithValue, getState }) => {
        try {
            if (demo) {
                const result = await axios.get('demoSlots/table');
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.get('cubics/table');
                return result;
            }

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const deleteThrowGame = createAsyncThunk(
    'cubics/delete',
    async (demo: string, { rejectWithValue, getState }) => {
        try {
            if (demo) {
                const result = await axios.delete(`demoSlots/cubics/${demo}`);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.delete('cubics/');
                return result;
            }

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsResult = createAsyncThunk(
    'cubics/result',
    async (demo: string, { rejectWithValue, getState }) => {
        try {
            if (demo) {
                const result = await axios.get(`demoSlots/result/${demo}`);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.get('cubics/result');
                return result;
            }
        } catch (error) {
            Notify.info('Click Start Game To play');
            return rejectWithValue(error);
        }
    }
);
export const postCubicResultSchool = createAsyncThunk(
    'cubics/postresultSchool',
    async (data: object | [], { rejectWithValue, getState }) => {
        try {
            if (Array.isArray(data)) {
                const result = await axios.post(`demoSlots/resultSchool/${data[0]}`, data[1]);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.post('cubics/resultSchool', data);
                return result;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const postCubicResultOther = createAsyncThunk(
    'cubics/postresultOther',
    async (data: object | [], { rejectWithValue, getState }) => {
        try {
            if (Array.isArray(data)) {
                const result = await axios.post(`demoSlots/resultOther/${data[0]}`, data[1]);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.post('cubics/resultOther', data);
                return result;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const postCubicResultCherk = createAsyncThunk(
    'cubics/postresultCherk',
    async (data: object, { rejectWithValue, getState }) => {
        try {
            if (Array.isArray(data)) {
                const result = await axios.post(`demoSlots/resultCherk/${data[0]}`, data[1]);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.post('cubics/resultCherk', data);
                return result;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsReroll = createAsyncThunk(
    'cubics/reroll',
    async (demo: string, { rejectWithValue, getState }) => {
        try {
            if (demo) {
                const result = await axios.get(`demoSlots/reroll/${demo}`);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.get('cubics/reroll');
                return result;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicInStash = createAsyncThunk(
    'cubics/instash',
    async (id: string | [], { rejectWithValue, getState }) => {
        try {
            if (Array.isArray(id)) {
                const result = await axios.get(`demoSlots/inStash/${id}`);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.get(`cubics/inStash/${id}`);
                return result;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicOutStash = createAsyncThunk(
    'cubics/outstash',
    async (id: string | [], { rejectWithValue, getState }) => {
        try {
            if (Array.isArray(id)) {
                const result = await axios.get(`demoSlots/outStash/${id}`);
                return result;
            } else {
                const state: RootState = getState() as RootState;
                setToken(state?.auth?.accessToken as string);
                const result = await axios.get(`cubics/outStash/${id}`);
                return result;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getCubicsInstruction = createAsyncThunk(
    'cubics/instr',
    async (_, { rejectWithValue }) => {
        try {
            const result = await axios.get("instructions/cubicInstruction");
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);