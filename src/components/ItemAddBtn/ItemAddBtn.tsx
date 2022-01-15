import { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { dateNow, getBoardData } from 'helpers/helpers';
import { updateBoardData } from 'store/Board/BoardSlice';
import useStyles from './ItemAddBtn.styles';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const mapDispatchToProps = {
  updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ItemAddBtnProps extends PropsFromRedux {
  index: number;
}

const ItemAddBtn: React.FC<ItemAddBtnProps> = ({ index, updateBoardData }) => {
  const classes = useStyles();
  const onClick = useCallback(() => {
    const data = getBoardData();
    if (data.length === 0) {
      return;
    }
    data[index].items.splice(data[index].items.length, 0, {
      id: dateNow(),
      title: 'Новое'
    });
    updateBoardData(data);
  }, []);

  return (
    <IconButton color="primary" aria-label="delete" size="large" onClick={onClick} className={classes.btn}>
      <AddCircleIcon />
    </IconButton>
  );
};

export default connector(ItemAddBtn);
