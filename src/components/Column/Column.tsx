import { Droppable } from 'react-beautiful-dnd';
import { ITasksData } from '../../interfaces/interfaces';
import Item from '../Item/Item';
import './Column.styles.scss';

interface IColumnProps {
    data: ITasksData[];
}

const Column: React.FC<IColumnProps> = ({ data }) => {
    return (
        <>
            {data.map(({ id, title, items }) => (
                <div className="column" key={id}>
                    <div className="column-header">
                        <span className="column-title">{title}</span>
                    </div>
                    <Droppable droppableId={`${id}`}>
                        {(provided, snapshot) => (
                            <div
                                className="column-wrapper"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    backgroundColor: snapshot.isDraggingOver ? 'grey' : 'darkgrey',
                                    height: snapshot.draggingFromThisWith ? '100%' : '110%'
                                }}>
                                {items.map(({ id, title }, i) => (
                                    <Item title={title} id={id} key={id} index={i} />
                                ))}
                            </div>
                        )}
                    </Droppable>
                </div>
            ))}
        </>
    );
};

export default Column;
