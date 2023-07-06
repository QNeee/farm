import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { login, register } from './authOperations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { getSlots, getSlotsById, postStartGame, postBetSlot, postSlotLine } from './slotsOperations';
import { getUserInfo, postUserBalance } from './userOperations';
interface IAuthState {
    user: { email: string, id: number | null, balance: number | 0 };
}
export interface Messages {
    from: string,
    to: string,
    date: Date
    id: number,
    content: string,
    ip: string,

}
interface IRootState {
    auth: IAuthState;
    token: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: unknown;
    allSlots: []
    slot: [],
    result: number
    lines: number,
    bet: number
}
const initialState: IRootState = {
    auth: {
        user: { email: '', id: null, balance: 0 },
    },
    allSlots: [],
    slot: [],
    result: 0,
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
    lines: 1,
    bet: 0
}


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(register.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
        }).addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.auth.user.id = action.payload.data.id;
            state.auth.user.email = action.payload.data.email;
            state.token = action.payload.data.token;
        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getUserInfo.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getUserInfo.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.auth.user.balance = payload.data.balance;
            state.auth.user.email = payload.data.email;
        }).addCase(getUserInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(postUserBalance.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(postUserBalance.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.auth.user.balance = payload.data.balance;
        }).addCase(postUserBalance.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getSlots.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getSlots.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.allSlots = payload.data;
        }).addCase(getSlots.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(getSlotsById.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getSlotsById.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.slot = payload.data.data;
            state.lines = parseInt(payload.data.lines);
            state.bet = parseInt(payload.data.bet);
        }).addCase(getSlotsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(postStartGame.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(postStartGame.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.auth.user.balance = payload.data.updatedUser.balance;
            state.slot = payload.data.data;
            state.result = payload.data.result;
        }).addCase(postStartGame.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(postSlotLine.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(postSlotLine.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.lines = payload.data;
        }).addCase(postSlotLine.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(postBetSlot.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(postBetSlot.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.bet = payload.data;
        }).addCase(postBetSlot.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})
const persistConfig = {
    key: 'local-key',
    storage,
    whitelist: ['isLoggedIn', 'token', 'adminToken']
}
export const chatReducer = persistReducer(
    persistConfig,
    chatSlice.reducer
);
export const getToken = (state: RootState) => state.chat.token;
export const getAllSlots = (state: RootState) => state.chat.allSlots;
export const getSlot = (state: RootState) => state.chat.slot;
export const getUserBalance = (state: RootState) => state.chat.auth.user.balance;
export const getUserEmail = (state: RootState) => state.chat.auth.user.email;
export const getSlotLines = (state: RootState) => state.chat.lines;
export const getUserResult = (state: RootState) => state.chat.result;
export const getUserBet = (state: RootState) => state.chat.bet;