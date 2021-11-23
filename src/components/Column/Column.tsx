import { useCallback } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ITasksData } from '../../interfaces/interfaces';
import Item from '../Item/Item';
import './Column.styles.scss';

interface IColumnProps {
    data: ITasksData[];
    setData: (data: ITasksData[]) => void;
}

const Column: React.FC<IColumnProps> = ({ data, setData }) => {
    console.log(data);

    const removeColumn = useCallback((e) => {
        const newData = data;
        console.log(data);

        console.log(e.target.dataset.index);
        console.log(newData);
        setData(newData.splice(e.target.dataset.index, 1));
    }, []);

    return (
        <>
            {data.map(({ id, title, items }, i) => (
                <div className="column" key={id}>
                    <div className="column-header">
                        <span className="column-title">{title}</span>
                        <button onClick={removeColumn} data-index={i}>
                            удалить
                        </button>
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
