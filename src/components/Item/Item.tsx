import { Draggable } from 'react-beautiful-dnd';
import { IBoardItem } from 'src/interfaces/interfaces';
import EditTitle from '../EditTitle/EditTitle';
import './Item.styles.scss';

interface IItemProps extends IBoardItem {
    index: number;
    columnIndex: number;
}

const Item: React.FC<IItemProps> = ({ id, title, index, columnIndex }) => {
    return (
        <Draggable draggableId={'draggable' + id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item">
                    <EditTitle className="item-title" title={title} index={index} columnIndex={columnIndex} />
                </div>
            )}
        </Draggable>
    );
};

export default Item;
