import { createSlice } from '@reduxjs/toolkit';
import { INewVersion } from '../../types';
import { getSlots, getSlotsById, postStartGame, postSlotLine, postBetSlot } from '../slots/slotsOperations';
export interface ISlotState {
    lineRender: boolean;
    confetti: boolean;
    error: unknown;
    loading: boolean,
    allSlots: [];
    slot: [];
    slotNew: INewVersion | null
    slotImg: string;
    result: number;
    lines: number;
    bet: number;
    version: string | null;
}
const initialState: ISlotState = {
    lineRender: false,
    confetti: false,
    allSlots: [],
    slot: [],
    slotNew: null,
    slotImg: '',
    lines: 1,
    bet: 1,
    loading: false,
    error: null,
    version: null,
    result: 0,
};
export const slotSlice = createSlice({
    name: 'slot',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
            })
    },
});