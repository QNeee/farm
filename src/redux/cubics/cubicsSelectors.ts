import { RootState } from "../store";

export const getSchool = (state: RootState) => state.cubic.school;
export const getOther = (state: RootState) => state.cubic.other;
export const getStartGame = (state: RootState) => state.cubic.startGame;
export const getCubics = (state: RootState) => state.cubic.cubics;
export const getCubicsRolls = (state: RootState) => state.cubic.rolls;
export const getCubicInStashArr = (state: RootState) => state.cubic.cubicInStash;
export const getCubicsResultData = (state: RootState) => state.cubic.cubicsResult;
export const getNumberResult = (state: RootState) => state.cubic.resultNumber;
export const getCubicsResultRenderUserSchool = (state: RootState) => state.cubic.cubicResultRenderUserSchool;
export const getCubicsResultRenderPcSchool = (state: RootState) => state.cubic.cubicResultRenderPcSchool;
export const getCubicsResultRenderUserOther = (state: RootState) => state.cubic.cubicResultRenderUserOther;
export const getCubicsResultRenderPcOther = (state: RootState) => state.cubic.cubicResultRenderPcOther;
export const getCubicsEndGame = (state: RootState) => state.cubic.endGame;
export const getCubicsEndGameResult = (state: RootState) => state.cubic.endGameResult;