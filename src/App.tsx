import { useEffect, useState } from 'react';
import Column from './components/Column/Column';
import ColumnsWrapper from './components/ColumnsWrapper/ColumnsWrapper';
import { initialBoardData } from './initialData';
import { Provider } from 'react-redux';
import { useStore } from './store/store';

const App: React.FC = () => {
    const store = useStore({
        board: { status: 'idle', error: null, data: localStorage.boardData ? JSON.parse(localStorage.boardData) : initialBoardData }
    });

    useEffect(() => {
        //@ts-ignore
        window['__react-beautiful-dnd-disable-dev-warnings'] = true;

        if (!localStorage.boardData) {
            localStorage.boardData = JSON.stringify(initialBoardData);
        }
    }, []);

    return (
        <Provider store={store}>
            <ColumnsWrapper>
                <Column />
            </ColumnsWrapper>
        </Provider>
    );
};

export default App;
