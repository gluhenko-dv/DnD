import { Draggable } from 'react-beautiful-dnd';
import { IBoardItem } from 'interfaces/interfaces';
import EditTitle from '../EditTitle/EditTitle';
import useStyles from './Item.styles';

interface IItemProps extends IBoardItem {
  index: number;
  columnIndex: number;
}

const Item: React.FC<IItemProps> = ({ id, title, index, columnIndex }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={'draggable' + id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={classes.item}>
          <EditTitle className={classes.title} title={title} index={index} columnIndex={columnIndex} />
        </div>
      )}
    </Draggable>
  );
};

export default Item;
