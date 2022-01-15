import { Button } from '@mui/material';
import React, { useCallback, useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect, ConnectedProps } from 'react-redux';
import { deleteBoardItem } from 'store/Board/BoardSlice';
import { RootState } from 'store/rootReducer';
import EditTitle from '../EditTitle/EditTitle';
import Item from '../Item/Item';
import ItemAddBtn from '../ItemAddBtn/ItemAddBtn';
import useStyles from './Column.styles';
import DeleteIcon from '@mui/icons-material/Delete';

import { initialBoardData } from 'initialData';
import { IBoardData } from 'interfaces/interfaces';

const mapStateToProps = ({ board }: RootState) => ({ board });

const mapDispatchToProps = {
  deleteBoardItem
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Column: React.FC<PropsFromRedux> = ({ board, deleteBoardItem }) => {
  const classes = useStyles();
  const removeColumn = useCallback((e) => {
    deleteBoardItem(e.target.dataset.index);
  }, []);
console.log(board);

  return (
    <>
      {board.data.map(({ id, items, title }, columnIndex) => (
        <div className={classes.column} key={id}>
          <div className={classes.header}>
            {title && <EditTitle className={classes.title} title={title} index={columnIndex} />}
            <DeleteIcon onClick={removeColumn} data-index={columnIndex} />
          </div>
          <Droppable droppableId={`${columnIndex}`}>
            {(provided, snapshot) => (
              <div
                className={classes.wrapper}
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
