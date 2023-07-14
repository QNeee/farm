import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { login, logout, refresh, register } from './authOperations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { getSlots, getSlotsById, postStartGame, postBetSlot, postSlotLine } from './slotsOperations';
import { getUserInfo, postUserBalance } from './userOperations';
interface IAuthState {
    user: { email: string, id: number | null, balance: number | 0 };
}
interface IRootState {
    auth: IAuthState;
    accessToken: string | null;
    sid: string | null;
    refreshToken: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: unknown;
    lineRender: boolean,
    confetti: boolean,
    allSlots: []
    slot: [],
    slotImg: string
    result: number
    lines: number,
    bet: number,
    refreshed: boolean
}
const initialState: IRootState = {
    auth: {
        user: { email: '', id: null, balance: 0 },
    },
    allSlots: [],
    slot: [],
    result: 0,
    accessToken: null,
    refreshToken: null,
    sid: null,
    isLoggedIn: false,
    loading: false,
    lineRender: false,
    confetti: false,
    error: null,
    slotImg: '',
    lines: 1,
    bet: 1,
    refreshed: false,
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
        }).addCase(login.fulfilled, (state, { payload }) => {
            state.auth.user.id = payload.data.user.id;
            state.auth.user.email = payload.data.user.email;
            state.accessToken = payload.data.accessToken;
            state.refreshToken = payload.data.refreshToken;
            state.sid = payload.data.sid;
            state.isLoggedIn = true;
        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(logout.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.auth.user.id = null;
            state.auth.user.email = '';
            state.auth.user.balance = 0;
            state.accessToken = null;
            state.refreshToken = null;
            state.sid = null;
            state.allSlots = [];
            state.slot = [];
            state.result = 0;
            state.bet = 1;
            state.lines = 1;
            state.isLoggedIn = false;
        }).addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(refresh.pending, (state) => {
            state.refreshed = false;
            state.loading = true;
            state.error = null;
        }).addCase(refresh.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.accessToken = payload.data.newAccessToken;
            state.refreshToken = payload.data.newRefreshToken;
            state.sid = payload.data.newSid;
            state.refreshed = true;
        }).addCase(refresh.rejected, (state, action) => {
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
            state.confetti = false;
            state.lineRender = false;
            state.slot = [];
            state.slotImg = '';
            state.result = 0;
            state.loading = true;
            state.error = null;
        }).addCase(getSlotsById.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.slot = payload.data.data;
            state.lines = parseInt(payload.data.lines);
            state.bet = parseInt(payload.data.bet);
            state.slotImg = payload.data.img;
        }).addCase(getSlotsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(postStartGame.pending, (state) => {
            state.confetti = false;
            state.lineRender = false;
            state.result = 0;
            state.loading = true;
            state.error = null;
        }).addCase(postStartGame.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.confetti = payload.data.confetti;
            state.lineRender = payload.data.winSound;
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
    whitelist: ['sid', 'accessToken', 'refreshToken', 'isLoggedIn']
}
export const chatReducer = persistReducer(
    persistConfig,
    chatSlice.reducer
);
export const getToken = (state: RootState) => state.chat.sid;
export const getAllSlots = (state: RootState) => state.chat.allSlots;
export const getSlot = (state: RootState) => state.chat.slot;
export const getUserBalance = (state: RootState) => state.chat.auth.user.balance;
export const getUserEmail = (state: RootState) => state.chat.auth.user.email;
export const getSlotLines = (state: RootState) => state.chat.lines;
export const getUserResult = (state: RootState) => state.chat.result;
export const getUserBet = (state: RootState) => state.chat.bet;
export const getIsLoggedIn = (state: RootState) => state.chat.isLoggedIn;
export const getRefreshed = (state: RootState) => state.chat.refreshed;
export const getSlotImg = (state: RootState) => state.chat.slotImg;
export const getLineRender = (state: RootState) => state.chat.lineRender;
export const getConfetti = (state: RootState) => state.chat.confetti;