import { RootState } from "../store";

export const getSlotImg = (state: RootState) => state.slot.slotImg;
export const getLineRender = (state: RootState) => state.slot.lineRender;
export const getConfetti = (state: RootState) => state.slot.confetti;
export const getVersion = (state: RootState) => state.slot.version;
export const getSlotNew = (state: RootState) => state.slot.slotNew;
export const getAllSlots = (state: RootState) => state.slot.allSlots
export const getSlot = (state: RootState) => state.slot.slot;
export const getSlotLines = (state: RootState) => state.slot.lines;
export const getUserBet = (state: RootState) => state.slot.bet;
export const getUserResult = (state: RootState) => state.slot.result;
export const getInstrCombination = (state: RootState) => state.slot.instrCombination;
export const getInstrValues = (state: RootState) => state.slot.instrValues;
export const getInstrLines = (state: RootState) => state.slot.instrLines;
export const getAnimate = (state: RootState) => state.slot.animate;


