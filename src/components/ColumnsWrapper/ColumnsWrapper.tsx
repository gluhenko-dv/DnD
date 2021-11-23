import './ColumnsWrapper.styles.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { useCallback } from 'react';
import { ITasksData } from '../../interfaces/interfaces';

interface IColumnsWrapperProps {
    data: ITasksData[];
    setData: (data: ITasksData[]) => void;
}

const ColumnsWrapper: React.FC<IColumnsWrapperProps> = ({ children, setData, data }) => {
    const onDragEnd = useCallback((result) => {
        const { destination, source } = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const currentBoard = data[Number(source.droppableId)];
        const currentItem = currentBoard.items[Number(source.index)];
        const dropBoard = data[Number(destination.droppableId)];
        const dropItem = Number(destination.index);

        currentBoard.items.splice(source.index, 1);
        dropBoard.items.splice(dropItem, 0, currentItem);

        setData(
            data.map((board) => {
                if (board.id === dropBoard.id) {
                    return dropBoard;
                }
                if (board.id === currentBoard.id) {
                    return currentBoard;
                }
                return board;
            })
        );
        localStorage.startArr = JSON.stringify(data);
    }, []);

    return (
        <div className="columns">
            <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
        </div>
    );
};

export default ColumnsWrapper;
