import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { login, logout, refresh, register } from './authOperations';
import {
    getSlots,
    getSlotsById,
    postStartGame,
    postBetSlot,
    postSlotLine,
} from './slotsOperations';
import { getUserInfo, postUserBalance } from './userOperations';
import { RootState } from './store';
import { ICubicsData, INewVersion, IResultCubicsSchool } from '../types';
import { deleteThrowGame, getCubicInStash, getCubicOutStash, getCubicsReroll, getCubicsResult, getCubicsStart, getCubicsStartGame, getCubicsTable, postCubicResultOther, postCubicResultSchool, postCubicStartGame } from './cubicsOperations';

interface IAuthState {
    user: { email: string; id: number | null; balance: number | 0 };
}

interface IRootState {
    auth: IAuthState;
    accessToken: string | null;
    sid: string | null;
    refreshToken: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: unknown;
    lineRender: boolean;
    confetti: boolean;
    school: string[] | null;
    other: string[] | null;
    cubicsResult: IResultCubicsSchool[] | null,
    resultNumber: number | null,
    cubics: ICubicsData[] | null;
    cubicInStash: ICubicsData[] | undefined;
    startGame: boolean;
    allSlots: [];
    slot: [];
    cubicResultRenderUserSchool: [] | null;
    cubicResultRenderPcSchool: [] | null;
    cubicResultRenderUserOther: [] | null;
    cubicResultRenderPcOther: [] | null;
    rolls: number | null,
    slotNew: INewVersion | null
    slotImg: string;
    result: number;
    lines: number;
    bet: number;
    refreshed: boolean;
    version: string | null;
}
const initialState: IRootState = {
    auth: {
        user: { email: '', id: null, balance: 0 },
    },
    allSlots: [],
    slot: [],
    cubicsResult: null,
    resultNumber: null,
    slotNew: null,
    result: 0,
    school: [],
    rolls: null,
    other: [],
    cubics: null,
    accessToken: null,
    refreshToken: null,
    cubicInStash: undefined,
    cubicResultRenderUserSchool: null,
    cubicResultRenderPcSchool: null,
    cubicResultRenderUserOther: null,
    cubicResultRenderPcOther: null,
    sid: null,
    isLoggedIn: false,
    loading: false,
    lineRender: false,
    confetti: false,
    startGame: false,
    error: null,
    slotImg: '',
    lines: 1,
    bet: 1,
    refreshed: false,
    version: null,
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.auth.user.id = payload.data.user.id;
                state.auth.user.email = payload.data.user.email;
                state.accessToken = payload.data.accessToken;
                state.refreshToken = payload.data.refreshToken;
                state.sid = payload.data.sid;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
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
                state.startGame = false;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(refresh.pending, (state) => {
                state.refreshed = false;
                state.loading = true;
                state.error = null;
            })
            .addCase(refresh.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.accessToken = payload.data.newAccessToken;
                state.refreshToken = payload.data.newRefreshToken;
                state.sid = payload.data.newSid;
                state.refreshed = true;
            })
            .addCase(refresh.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getUserInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserInfo.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.auth.user.balance = payload.data.balance;
                state.auth.user.email = payload.data.email;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(postUserBalance.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postUserBalance.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.auth.user.balance = payload.data.balance;
            })
            .addCase(postUserBalance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getSlots.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSlots.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.allSlots = payload.data;
            })
            .addCase(getSlots.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getSlotsById.pending, (state) => {
                state.confetti = false;
                state.lineRender = false;
                state.slot = [];
                state.slotImg = '';
                state.result = 0;
                state.loading = true;
                state.error = null;
                state.version = null;
            })
            .addCase(getSlotsById.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.version = payload.data.version;
                state.slot = payload.data.data;
                state.slotNew = payload.data.data;
                state.lines = parseInt(payload.data.lines);
                state.bet = parseInt(payload.data.bet);
                state.slotImg = payload.data.img;
            })
            .addCase(getSlotsById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(postStartGame.pending, (state) => {
                state.confetti = false;
                state.lineRender = false;
                state.result = 0;
                state.loading = true;
                state.error = null;
            })
            .addCase(postStartGame.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.confetti = payload.data.confetti;
                state.lineRender = payload.data.winSound;
                state.auth.user.balance = payload.data.updatedUser.balance;
                state.slot = payload.data.data;
                state.slotNew = payload.data.data;
                state.result = payload.data.result;
            })
            .addCase(postStartGame.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(postSlotLine.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postSlotLine.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.lines = payload.data;
            })
            .addCase(postSlotLine.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(postBetSlot.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postBetSlot.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.bet = payload.data;
            })
            .addCase(postBetSlot.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(getCubicsTable.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCubicsTable.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.school = payload.data.school;
                state.other = payload.data.other;
            })
            .addCase(getCubicsTable.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(getCubicsStartGame.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCubicsStartGame.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubics = payload.data.cubicsImgRandom;
                state.rolls = payload.data.rolls;
                state.cubicsResult = payload.data.result;
                state.resultNumber = payload.data.number;
            })
            .addCase(getCubicsStartGame.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(postCubicStartGame.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postCubicStartGame.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.startGame = payload.data.response.cubics;
                state.rolls = payload.data.rolls;
            })
            .addCase(postCubicStartGame.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(deleteThrowGame.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteThrowGame.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.startGame = payload.data;
                state.cubics = null;
                state.rolls = null;
                state.cubicInStash = undefined;
                state.cubicsResult = null;
                state.cubicResultRenderUserSchool = null;
                state.cubicResultRenderPcSchool = null;
            })
            .addCase(deleteThrowGame.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(getCubicsStart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCubicsStart.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.startGame = payload.data;
            })
            .addCase(getCubicsStart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(getCubicsReroll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCubicsReroll.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubics = payload.data.cubicsImgRandom;
                state.rolls = payload.data.rolls;
                state.cubicsResult = payload.data.result;
                state.resultNumber = payload.data.number;
            })
            .addCase(getCubicsReroll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(getCubicInStash.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCubicInStash.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubics = payload.data.cubics;
                state.cubicInStash = payload.data.cubicsInStash;
            })
            .addCase(getCubicInStash.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(getCubicOutStash.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCubicOutStash.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubics = payload.data.cubics;
                state.cubicInStash = payload.data.cubicsInStash;
            })
            .addCase(getCubicOutStash.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(getCubicsResult.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCubicsResult.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubicsResult = payload.data;
            })
            .addCase(getCubicsResult.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(postCubicResultSchool.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postCubicResultSchool.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubicResultRenderUserSchool = payload.data.resultCombinationUserSchool;
                state.cubicsResult = null;
                state.cubicResultRenderPcSchool = payload.data.resultCombinationPcSchool;
                state.cubics = null;
                state.cubicInStash = [];
                state.rolls = payload.data.rolls;
            })
            .addCase(postCubicResultSchool.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(postCubicResultOther.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postCubicResultOther.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubicResultRenderUserOther = payload.data.resultCombinationUserOther;
                state.cubicsResult = null;
                state.cubicResultRenderPcOther = payload.data.resultCombinationPcOther;
                state.cubics = null;
                state.cubicInStash = [];
                state.rolls = payload.data.rolls;
            })
            .addCase(postCubicResultOther.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
const persistConfig = {
    key: 'local-key',
    storage,
    whitelist: [
        'sid',
        'accessToken',
        'refreshToken',
        'isLoggedIn',
        'auth',
        'lines',
        'bet',
        'slot',
        'slotImg',
        'version',
        'startGame',
        'cubics',
        'rolls',
        'cubicInStash',
        'cubicsResult',
        'cubicResultRenderUserSchool',
        'cubicResultRenderPcSchool',
        'cubicResultRenderUserOther',
        'cubicResultRenderPcOther'
    ],
};
export const chatReducer = persistReducer(persistConfig, chatSlice.reducer);
export const getToken = (state: RootState) => state.chat.sid;
export const getAllSlots = (state: RootState) => state.chat.allSlots;
export const getSlot = (state: RootState) => state.chat.slot;
export const getUserBalance = (state: RootState) =>
    state.chat.auth.user.balance;
export const getUserEmail = (state: RootState) => state.chat.auth.user.email;
export const getSlotLines = (state: RootState) => state.chat.lines;
export const getUserResult = (state: RootState) => state.chat.result;
export const getUserBet = (state: RootState) => state.chat.bet;
export const getIsLoggedIn = (state: RootState) => state.chat.isLoggedIn;
export const getRefreshed = (state: RootState) => state.chat.refreshed;
export const getSlotImg = (state: RootState) => state.chat.slotImg;
export const getLineRender = (state: RootState) => state.chat.lineRender;
export const getConfetti = (state: RootState) => state.chat.confetti;
export const getVersion = (state: RootState) => state.chat.version;
export const getSlotNew = (state: RootState) => state.chat.slotNew;
export const getSchool = (state: RootState) => state.chat.school;
export const getOther = (state: RootState) => state.chat.other;
export const getStartGame = (state: RootState) => state.chat.startGame;
export const getCubics = (state: RootState) => state.chat.cubics;
export const getCubicsRolls = (state: RootState) => state.chat.rolls;
export const getCubicInStashArr = (state: RootState) => state.chat.cubicInStash;
export const getCubicsResultData = (state: RootState) => state.chat.cubicsResult;
export const getNumberResult = (state: RootState) => state.chat.resultNumber;
export const getCubicsResultRenderUserSchool = (state: RootState) => state.chat.cubicResultRenderUserSchool;
export const getCubicsResultRenderPcSchool = (state: RootState) => state.chat.cubicResultRenderPcSchool;
