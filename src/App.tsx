import { useEffect, useState } from 'react';
import Column from './components/Column/Column';
import ColumnsWrapper from './components/ColumnsWrapper/ColumnsWrapper';
import { ITasksData } from './interfaces/interfaces';
import { initialData } from './initialData';

const App: React.FC = () => {
    const [data, setData] = useState<ITasksData[]>(localStorage.startArr ? JSON.parse(localStorage.startArr) : initialData);

    useEffect(() => {
        //@ts-ignore
        window['__react-beautiful-dnd-disable-dev-warnings'] = true;

        if (!localStorage.startArr) {
            localStorage.startArr = JSON.stringify(initialData);
        }
    }, []);

    return (
        <ColumnsWrapper data={data} setData={setData}>
            <Column data={data} setData={setData} />
        </ColumnsWrapper>
    );
};

export default App;
