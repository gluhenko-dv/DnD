import { useCallback } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect, ConnectedProps } from 'react-redux';
import { IBoardData } from '../../interfaces/interfaces';
import { deleteBoardItem } from '../../store/Board/BoardSlice';
import { RootState } from '../../store/rootReducer';
import Item from '../Item/Item';
import './Column.styles.scss';

const mapStateToProps = ({ board }: RootState) => ({ board });

const mapDispatchToProps = {
    deleteBoardItem
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Column: React.FC<PropsFromRedux> = ({ board, deleteBoardItem }) => {
    const removeColumn = useCallback((e) => {
        deleteBoardItem(e.target.dataset.index);
    }, []);

    return (
        <>
            {board.data.map(({ id, title, items }, i) => (
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

export default connector(Column);
