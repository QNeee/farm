import { createSlice } from '@reduxjs/toolkit';
import { register, login, refresh, logout, getUserInfo, postUserBalance, postUserPhone, patchUserPassword, forgotPassword } from './authOperations';
import { Notify } from 'notiflix';
interface IUserState {
    user: { email: string; id: number | null; balance: number | 0, phone: string | null, google: boolean | string };
}
export interface IAuthState {
    auth: IUserState;
    accessToken: string | null;
    sid: string | null;
    refreshToken: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: unknown;
    passMsg: string;
    language: string;
    refreshed: boolean;
    updateBalance: boolean;
}
const initialState: IAuthState = {
    auth: {
        user: { email: '', id: null, balance: 0, phone: null, google: false },
    },
    accessToken: null,
    refreshToken: null,
    sid: '',
    passMsg: '',
    isLoggedIn: false,
    loading: false,
    error: null,
    updateBalance: false,
    language: 'en',
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
        setLanguage: (state, { payload }) => {
            state.language = payload;
        }
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
                return initialState;
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
                state.auth.user.google = 'false';
                state.loading = false;
            })
            .addCase(patchUserPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(forgotPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(forgotPassword.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.passMsg = payload.data.message;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addMatcher(
                action => action.type.endsWith(`/rejected`),
                (_state, { payload }) => {
                    if (payload.code === 401) {
                        Notify.info('Sesion close login again please');
                        return initialState;
                    }
                }
            );
    },
});
export const { googleAuth, updateBalance, setLanguage } = authSlice.actions;