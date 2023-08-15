import { RootState } from "../store";



export const getToken = (state: RootState) => state.auth.sid
export const getUserEmail = (state: RootState) => state.auth.auth.user.email;
export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getRefreshed = (state: RootState) => state.auth.refreshed;
export const getUserBalance = (state: RootState) => state.auth.auth.user.balance
export const getUpdateBalance = (state: RootState) => state.auth.updateBalance;
export const getUserId = (state: RootState) => state.auth.auth.user.id;
export const getUserPhone = (state: RootState) => state.auth.auth.user.phone;
export const getGoogle = (state: RootState) => state.auth.auth.user.google;