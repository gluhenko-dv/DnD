import { SyntheticEvent } from 'react';
import { IBoardData } from 'src/interfaces/interfaces';

export const getBoardData = (): IBoardData[] => (localStorage.boardData ? JSON.parse(localStorage.boardData) : []);

export const dateNow = (): number => Math.floor(Date.now());

export const keydownEnter = (event: KeyboardEvent) => {
    const srcElement = event.target as HTMLElement;
    if (event.code === 'Enter') {
        event.preventDefault();
        srcElement.blur();
    }
};

export const onFocusEditable = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    target.addEventListener('keydown', keydownEnter);
};
