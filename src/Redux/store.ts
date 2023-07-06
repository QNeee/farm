import { configureStore } from '@reduxjs/toolkit';
import { chatReducer } from './chatSlice';
import { persistStore } from 'redux-persist';
export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);