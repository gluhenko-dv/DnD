import { Draggable } from 'react-beautiful-dnd';
import './Item.styles.scss';

interface IItemProps {
    title: string;
    index: number;
}

const Item: React.FC<IItemProps> = ({ title, index }) => {
    return (
        <Draggable draggableId={'draggable' + index} index={index}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="item">
                        <span>{title}</span>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Item;
