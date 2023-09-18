import { IImg } from './components/Slot';

export interface IUserBalance {
  balance: string;
}
export interface IResultCubicsSchool {
  [key: string]: string
}
export interface ICubicsData {
  _id?: string,
  img: string,
  value: number,
  name: string,
}
export interface IData {
  _id: string;
  name: string;
  img: string;
}
export interface ISlotsData {
  id: string;
  value: number;
  img: string;
  line?: boolean | string | undefined;
}
export interface ISlotDemo {
  lines: number,
  bet: number,
  id: string,
  balance?: number,
}

export interface ICubicStartGame {
  start: boolean,
  id?: string
}
export interface ISlotStartGame {
  id: string
}
export interface INewVersion {
  uniqueArr: IImg[];
  uniqueArr1: IImg[];
  uniqueArr2: IImg[];
}
export interface IPostSlotLine {
  lines?: number;
  id: string;
  bet?: number;
}
export interface ICubicDataProps {
  cubicsData: ICubicsData[] | null;
}
export interface ICubicsResultTable {
  combination: string;
  count: number;
  number: string;
  textContent: string;
}
interface ICubicResultDataRenderOther {
  [key: string]: string
}
export interface ICubicResultRenderOtherProps {
  cubicsResult: ICubicResultDataRenderOther[] | null
}
interface ICubicText {
  text: string;
  img: string;
}
interface ICubicInstValues {
  img: string;
  value: number;
}
interface ICubicInstComb {
  img: string;
  name: string;
}
export interface ICubicInstr {
  combination: ICubicInstComb[];
  text: ICubicText[];
  values: ICubicInstValues[];
}