import { createSlice } from '@reduxjs/toolkit';
import { register, login, refresh, logout, getUserInfo, postUserBalance, postUserPhone, patchUserPassword } from './authOperations';
interface IUserState {
    user: { email: string; id: number | null; balance: number | 0, phone: string | null, google: boolean | null };
}
export interface IAuthState {
    auth: IUserState;
    accessToken: string | null;
    sid: string | null;
    refreshToken: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: unknown;
    allSlots: [];
    slot: [];
    result: number;
    lines: number;
    bet: number;
    refreshed: boolean;
    startGame: boolean;
    updateBalance: boolean;
}
const initialState: IAuthState = {
    auth: {
        user: { email: '', id: null, balance: 0, phone: null, google: null },
    },
    accessToken: null,
    refreshToken: null,
    sid: '',
    isLoggedIn: false,
    loading: false,
    error: null,
    updateBalance: false,
    allSlots: [],
    slot: [],
    result: 0,
    lines: 1,
    bet: 1,
    startGame: false,
    refreshed: false
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        googleAuth: (state, { payload }) => {
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
            state.sid = payload.sid;
            state.auth.user.email = payload.email;
            state.auth.user.id = payload.id;
            state.auth.user.google = payload.google;
            state.isLoggedIn = true;
        },
        updateBalance: (state, { payload }) => {
            state.updateBalance = payload;
        },
    },
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
                state.refreshed = false;
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
                state.auth.user.phone = payload.data.phone;
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
                state.updateBalance = true;
            })
            .addCase(postUserBalance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(postUserPhone.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postUserPhone.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.auth.user.phone = payload.data;
                state.updateBalance = true;
            })
            .addCase(postUserPhone.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(patchUserPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(patchUserPassword.fulfilled, (state, { payload }) => {
                state.auth.user.google = false;
                state.loading = false;
            })
            .addCase(patchUserPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});
export const { googleAuth, updateBalance } = authSlice.actions;