import { Droppable } from 'react-beautiful-dnd';
import Item from '../Item/Item';
import './Column.styles.scss';

const Column: React.FC = () => {
    const itemArr = [
        {
            id: 0,
            title: 'item'
        },
        {
            id: 1,
            title: 'item'
        },
        {
            id: 2,
            title: 'item'
        },
        {
            id: 3,
            title: 'item'
        },
        {
            id: 4,
            title: 'item'
        }
    ];

    return (
        <div className="column">
            <div className="column-header">
                <span className="column-title">Заголовок</span>
            </div>
            <div className="column-wrapper">
                <Droppable droppableId="droppable-1">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                            {...provided.droppableProps}>
                            {itemArr.map(({ id, title }) => (
                                <Item title={title + id} key={id} index={id} />
                            ))}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};

export default Column;
