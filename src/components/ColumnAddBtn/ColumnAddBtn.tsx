import { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { dateNow, getBoardData } from 'helpers/helpers';
import { updateBoardData } from 'store/Board/BoardSlice';
import useStyles from './ColumnAddBtn.styles';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const mapDispatchToProps = {
  updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ColumnAddBtn: React.FC<PropsFromRedux> = ({ updateBoardData }) => {
  const classes = useStyles();

  const onClick = useCallback(() => {
    // const data = getBoardData();

    // data.splice(data.atributes.length, 0, {
    //   id: dateNow(),
    //   title: 'Новая колонка',
    //   items: []
    // });

    // updateBoardData(data);
  }, []);

  return (
    <IconButton color="primary" aria-label="delete" size="large" onClick={onClick} className={classes.addBtn}>
      <AddCircleIcon fontSize="inherit" />
    </IconButton>
  );
};

export default connector(ColumnAddBtn);
