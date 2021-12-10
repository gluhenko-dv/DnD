export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export type Error = string | undefined | null;

export type ReduxStatus = {
  status: Status;
  error: Error;
};

export interface IBoardData {
  id: number;
  title: string;
  items: IBoardItem[];
}

export interface IBoardItem {
  id: number;
  title: string;
}
