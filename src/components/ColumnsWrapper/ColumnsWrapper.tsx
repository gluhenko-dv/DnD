import { DragDropContext } from 'react-beautiful-dnd';
import { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { updateBoardData } from 'store/Board/BoardSlice';
import './ColumnsWrapper.styles.scss';

import ColumnAddBtn from '../ColumnAddBtn/ColumnAddBtn';
import { getBoardData } from 'helpers/helpers';

const mapDispatchToProps = {
    updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ColumnsWrapper: React.FC<PropsFromRedux> = ({ updateBoardData, children }) => {
    const onDragEnd = useCallback((result) => {
        const { destination, source } = result;

        const data = getBoardData()

        if (!destination || data.length === 0) {
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

        updateBoardData(
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
    }, []);

    return (
        <div className="columns">
            <DragDropContext onDragEnd={onDragEnd}>
                {children}
                <ColumnAddBtn />
            </DragDropContext>
        </div>
    );
};

export default connector(ColumnsWrapper);
