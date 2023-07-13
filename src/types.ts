export interface IUserBalance {
    balance: string
}

export interface IData {
    _id: string;
    name: string;
    img: string;
}
export interface ISlotsData {
    id: string,
    value: number,
    img: string,
    line?: boolean | string | undefined
}
export interface IPostSlotLine {
    lines?: number,
    id: string,
    bet?: number
}