import { connect, ConnectedProps } from 'react-redux';
import { dateNow } from '../../helpers/helpers';
import { IBoardData } from '../../interfaces/interfaces';
import { updateBoardData } from '../../store/Board/BoardSlice';
import './ColumnAddBtn.styles.scss';

const mapDispatchToProps = {
    updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ColumnAddBtn: React.FC<PropsFromRedux> = ({ updateBoardData }) => {
    const onClick = () => {
        const data: IBoardData[] = localStorage.boardData ? JSON.parse(localStorage.boardData) : [];
        if (data.length === 0) {
            return;
        }
        data.splice(data.length, 0, {
            id: dateNow(),
            title: 'Новая колонка',
            items: []
        });
        updateBoardData(data);
    };

    return (
        <button onClick={onClick} className="column-add-btn">
            добавить колонку
        </button>
    );
};

export default connector(ColumnAddBtn);
