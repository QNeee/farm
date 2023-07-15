import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { setToken } from './authOperations';
import { IUserBalance } from '../types';
import { RootState } from './store';

export const getUserInfo = createAsyncThunk(
  'user',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state: RootState = getState() as RootState;
      setToken(state?.chat?.accessToken as string);
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
      setToken(state?.chat?.accessToken as string);
      const result = await axios.post('users/balance', data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
