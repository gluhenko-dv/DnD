import './ColumnsWrapper.styles.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { useCallback } from 'react';

const ColumnsWrapper: React.FC = ({ children }) => {
    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);

    const onDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback(() => {
        // the only one that is required
    }, []);

    return (
        <div className="columns">
            <DragDropContext
                onBeforeDragStart={onBeforeDragStart}
                onDragStart={onDragStart}
                onDragUpdate={onDragUpdate}
                onDragEnd={onDragEnd}>
                {children}
            </DragDropContext>
        </div>
    );
};

export default ColumnsWrapper;
