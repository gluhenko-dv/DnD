import { Draggable } from 'react-beautiful-dnd';
import { initialBoardItem } from '../../interfaces/interfaces';
import './Item.styles.scss';

interface IItemProps extends initialBoardItem {
    index: number;
}

const Item: React.FC<IItemProps> = ({ id, title, index }) => {
    return (
        <Draggable draggableId={'draggable' + id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item">
                    <span>{title}</span>
                </div>
            )}
        </Draggable>
    );
};

export default Item;
