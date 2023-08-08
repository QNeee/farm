import { createSlice } from '@reduxjs/toolkit';
import { INewVersion } from '../../types';
import { getSlots, getSlotsById, postStartGame, postSlotLine, postBetSlot, getInstructionSlot } from '../slots/slotsOperations';
export interface ISlotState {
    demoBalance: number | null;
    lineRender: boolean;
    aniamteHelper: boolean;
    confetti: boolean;
    error: unknown;
    animate: boolean;
    loading: boolean,
    instrCombination: [],
    instrValues: [],
    instrLines: [],
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
    animate: false,
    demoBalance: null,
    allSlots: [],
    instrCombination: [],
    aniamteHelper: false,
    instrValues: [],
    instrLines: [],
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
    reducers: {
        animateHelper: (state, { payload }) => {
            state.aniamteHelper = payload;
        },
    },
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
                state.animate = true;
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
                state.demoBalance = payload.data.updatedUser;
                state.animate = false;
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
            }).addCase(getInstructionSlot.pending, (state) => {
                state.instrCombination = [];
                state.instrLines = [];
                state.instrValues = [];
                state.loading = true;
                state.error = null;
            })
            .addCase(getInstructionSlot.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.instrCombination = payload.data.combination;
                state.instrLines = payload.data.lines;
                state.instrValues = payload.data.values;
            })
            .addCase(getInstructionSlot.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});
export const { animateHelper } = slotSlice.actions;