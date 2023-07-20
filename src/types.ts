import { IImg } from './components/Slot';

export interface IUserBalance {
  balance: string;
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
