import { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { dateNow, getBoardData } from 'helpers/helpers';
import { updateBoardData } from 'store/Board/BoardSlice';
import useStyles from './ColumnAddBtn.styles';

const mapDispatchToProps = {
  updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ColumnAddBtn: React.FC<PropsFromRedux> = ({ updateBoardData }) => {
  const classes = useStyles();

  const onClick = useCallback(() => {
    const data = getBoardData();

    data.splice(data.length, 0, {
      id: dateNow(),
      title: 'Новая колонка',
      items: []
    });

    updateBoardData(data);
  }, []);

  return (
    <button onClick={onClick} className={classes.addBtn}>
      добавить колонку
    </button>
  );
};

export default connector(ColumnAddBtn);
