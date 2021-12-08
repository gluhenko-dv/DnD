import { useCallback } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect, ConnectedProps } from 'react-redux';
import { deleteBoardItem } from 'src/store/Board/BoardSlice';
import { RootState } from 'src/store/rootReducer';

import EditTitle from '../EditTitle/EditTitle';
import Item from '../Item/Item';
import ItemAddBtn from '../ItemAddBtn/ItemAddBtn';
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
            {board.data.map(({ id, title, items }, columnIndex) => (
                <div className="column" key={id}>
                    <div className="column-header">
                        <EditTitle className="column-title" title={title} index={columnIndex} />
                        <button onClick={removeColumn} data-index={columnIndex}>
                            удалить
                        </button>
                    </div>
                    <Droppable droppableId={`${columnIndex}`}>
                        {(provided, snapshot) => (
                            <div
                                className="column-wrapper"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    backgroundColor: snapshot.isDraggingOver ? 'grey' : 'darkgrey'
                                }}>
                                {items.map(({ id, title }, i) => (
                                    <Item title={title} id={id} key={id} index={i} columnIndex={columnIndex} />
                                ))}
                                <ItemAddBtn index={columnIndex} />
                            </div>
                        )}
                    </Droppable>
                </div>
            ))}
        </>
    );
};

export default connector(Column);
