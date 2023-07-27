import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authSlice } from './auth/authSlice';
import { cubicSlice } from './cubics/cubicsSlice';
import { slotSlice } from './slots/slotsSlice';
const authPersistConfig = {
  key: 'auth',
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
  ],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);
const cubicsPersistConfig = {
  key: 'cubic',
  storage,
  whitelist: [
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
const persistedCubicsReducer = persistReducer(cubicsPersistConfig, cubicSlice.reducer);
const slotsPersistConfig = {
  key: 'slots',
  storage,
  whitelist: [
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
const persistedSlotsReducer = persistReducer(slotsPersistConfig, slotSlice.reducer);
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cubic: persistedCubicsReducer,
    slot: persistedSlotsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
