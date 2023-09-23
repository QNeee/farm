import { createSlice } from '@reduxjs/toolkit';
import { ICubicsData, ICubicsResultTable, IResultCubicsSchool } from '../../types';
import { getCubicsTable, getCubicsResult, postCubicResultOther, postCubicResultCherk, postCubicResultSchool, getCubicsReroll, getCubicOutStash, getCubicInStash, getCubicsStartGame, postCubicStartGame, deleteThrowGame, getCubicsStart, getCubicsInstruction } from './cubicsOperations';
import { logout } from '../auth/authOperations';
import { Notify } from 'notiflix';

export interface ICubicState {
    cubics: ICubicsData[] | null;
    cubicInStash: ICubicsData[] | undefined;
    school: string[] | null;
    other: string[] | null;
    cubicsResult: IResultCubicsSchool[] | null,
    resultNumber: number | null,
    endGame: boolean;
    endGameResult: string;
    startGame: boolean;
    cubicInstruction: [];
    instrCombination: [];
    instrValues: [];
    instrLines: [];
    cubicResultRenderUserSchool: ICubicsResultTable[] | null;
    cubicResultRenderPcSchool: ICubicsResultTable[] | null;
    cubicResultRenderUserOther: ICubicsResultTable[] | null;
    cubicResultRenderPcOther: ICubicsResultTable[] | null;
    rolls: number | null,
    error: unknown;
    loading: boolean,
}
const initialState: ICubicState = {
    cubicsResult: null,
    school: [],
    endGame: false,
    endGameResult: '',
    rolls: null,
    other: [],
    cubics: null,
    loading: false,
    startGame: false,
    cubicInStash: undefined,
    cubicInstruction: [],
    instrCombination: [],
    instrValues: [],
    instrLines: [],
    cubicResultRenderUserSchool: null,
    cubicResultRenderPcSchool: null,
    cubicResultRenderUserOther: null,
    cubicResultRenderPcOther: null,
    resultNumber: null,
    error: null
};
export const cubicSlice = createSlice({
    name: 'cubic',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCubicsTable.pending, (state) => {
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
                state.cubicResultRenderUserOther = null;
                state.cubicResultRenderPcOther = null;
                state.endGame = false;
                state.endGameResult = '';
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
                state.startGame = payload.data.start;
                state.rolls = payload.data.rolls;
                state.cubicInStash = payload.data.cubicsInStash;
                state.cubics = payload.data.cubicsOutStash;
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
                state.cubicResultRenderUserSchool = null;
                state.cubicResultRenderPcSchool = null;
                state.cubicResultRenderUserOther = null;
                state.cubicResultRenderPcOther = null;
                state.error = null;
            })
            .addCase(getCubicsResult.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubicResultRenderUserSchool = payload.data.school.player;
                state.cubicResultRenderPcSchool = payload.data.school.pc;
                state.cubicResultRenderUserOther = payload.data.other.player;
                state.cubicResultRenderPcOther = payload.data.other.pc;
            })
            .addCase(getCubicsResult.rejected, (state, action) => {
                state.loading = false;
                state.cubicResultRenderUserSchool = null;
                state.cubicResultRenderPcSchool = null;
                state.cubicResultRenderUserOther = null;
                state.cubicResultRenderPcOther = null;
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
                state.cubicResultRenderPcOther = payload.data.resultCombinationPcOther;
                state.cubics = null;
                state.cubicInStash = [];
                state.rolls = payload.data.rolls;
                state.endGame = payload.data.endGame;
                state.endGameResult = payload.data.endGameResult;
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
                state.cubicResultRenderPcSchool = payload.data.resultCombinationPcSchool;
                state.cubics = null;
                state.cubicInStash = [];
                state.rolls = payload.data.rolls;
                state.endGame = payload.data.endGame;
                state.endGameResult = payload.data.endGameResult;
            })
            .addCase(postCubicResultOther.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(postCubicResultCherk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postCubicResultCherk.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubicResultRenderUserOther = payload.data.resultCombinationUserOther;
                state.cubicsResult = null;
                state.cubicResultRenderPcSchool = payload.data.resultCombinationPcSchool;
                state.cubicResultRenderPcOther = payload.data.resultCombinationPcOther;
                state.cubics = null;
                state.cubicInStash = [];
                state.rolls = payload.data.rolls;
                state.endGame = payload.data.endGame;
                state.endGameResult = payload.data.endGameResult;
            })
            .addCase(postCubicResultCherk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(getCubicsInstruction.pending, (state) => {
                state.instrCombination = [];
                state.instrLines = [];
                state.instrValues = [];
                state.loading = true;
                state.error = null;
            })
            .addCase(getCubicsInstruction.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cubicInstruction = payload.data;
            })
            .addCase(getCubicsInstruction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }).addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state, { payload }) => {
                return initialState;
            })
            .addCase(logout.rejected, (state, action) => {
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