export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export type Error = string | undefined | null;

export type ReduxStatus = {
    status: Status;
    error: Error;
};

export interface IBoardData {
    id: number;
    title: string;
    items: initialBoardItem[];
}

export interface initialBoardItem {
    id: number;
    title: string;
}
